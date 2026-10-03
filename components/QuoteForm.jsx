'use client';

import { useEffect, useRef, useState } from 'react';
import { services } from '@/lib/services';
import { site } from '@/lib/site';
import { trackEvent } from '@/components/Analytics';

/**
 * Three-step quote / booking request.
 *
 *   1. The job      — service, property type, what's going on
 *   2. The property — photos, address, area, timing (booking adds date/time)
 *   3. You          — name, phone, email, preferred contact, consent
 *
 * Runs on Netlify Forms. The field list is declared statically in
 * public/__forms.html (keep the two in sync); this component POSTs
 * multipart/form-data there so photo uploads go through. Netlify accepts one
 * file per field and about 8 MB per submission, hence three single-file inputs
 * and the size check below.
 *
 * All steps stay mounted (only hidden) so the final FormData contains every
 * field. Native validation runs per step via reportValidity().
 */
const MAX_BYTES = 8 * 1024 * 1024;

const STEPS = ['The job', 'The property', 'Your details'];

export default function QuoteForm({ variant = 'quote', className = '' }) {
  const formName = variant === 'booking' ? 'booking' : 'quote';
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [fileError, setFileError] = useState('');
  const stepRefs = [useRef(null), useRef(null), useRef(null)];
  const headingRef = useRef(null);
  const firstRender = useRef(true);

  // Move focus to the step heading when the step changes (not on first load),
  // so keyboard and screen-reader users land at the top of the new step.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  function validateStep(i) {
    const fields = stepRefs[i].current?.querySelectorAll('input, select, textarea') ?? [];
    for (const f of fields) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return false;
      }
    }
    if (i === 1) {
      const total = Array.from(stepRefs[1].current.querySelectorAll('input[type=file]'))
        .flatMap((f) => Array.from(f.files ?? []))
        .reduce((sum, file) => sum + file.size, 0);
      if (total > MAX_BYTES) {
        setFileError('Photos add up to more than 8 MB. Use smaller photos, or send them on WhatsApp instead.');
        return false;
      }
    }
    setFileError('');
    return true;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (step < STEPS.length - 1) return next();
    if (!validateStep(step)) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/__forms.html', { method: 'POST', body: data });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent('generate_lead', {
        form_name: 'quote_request',
        service: data.get('service') || 'unspecified',
      });
      form.reset();
      setStep(0);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className={`rounded-lg border border-amber/50 bg-amber/10 p-8 ${className}`} role="status">
        <h2 className="h3 text-ink-950">Request received — thank you</h2>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-700">
          We will call or email within one business day to go over your quote or book a visit. If
          water is coming in right now, call{' '}
          <a href={site.phoneHref} className="font-semibold text-amber-deep underline">
            {site.phone}
          </a>{' '}
          and you will get someone directly.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another request
        </button>
      </div>
    );
  }

  const optionCard =
    'flex cursor-pointer items-center gap-3 rounded-md border border-concrete-300 bg-white px-4 py-3.5 text-[14.5px] font-medium text-ink-800 transition-colors hover:border-amber has-[:checked]:border-ink-900 has-[:checked]:bg-ink-900 has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-amber';

  return (
    <form
      name={formName}
      method="POST"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
      className={`rounded-lg border border-concrete-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] sm:p-8 ${className}`}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {/* ---------------------------------------------------------- Progress */}
      <ol className="grid grid-cols-3 gap-2" aria-label="Form progress">
        {STEPS.map((label, i) => (
          <li key={label} aria-current={i === step ? 'step' : undefined}>
            <span
              className={`block h-1.5 rounded-full transition-colors ${i <= step ? 'bg-amber' : 'bg-concrete-200'}`}
              aria-hidden="true"
            />
            <span
              className={`mt-2 block text-[11.5px] font-semibold uppercase tracking-[0.1em] ${
                i === step ? 'text-ink-900' : 'text-concrete-500'
              }`}
            >
              <span className="sr-only">Step {i + 1} of 3: </span>
              {label}
              {i < step && <span className="sr-only"> (done)</span>}
            </span>
          </li>
        ))}
      </ol>

      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 font-display text-[24px] font-bold uppercase leading-tight text-ink-950 outline-none"
      >
        {['What needs fixing?', 'Tell us about the property', 'How do we reach you?'][step]}
      </h3>

      {/* ------------------------------------------------------------ Step 1 */}
      <div ref={stepRefs[0]} hidden={step !== 0} className="mt-5 space-y-5">
        <fieldset>
          <legend className="label">Service *</legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {[...services.map((s) => s.name), 'Not sure — please advise'].map((name, i) => (
              <label key={name} className={optionCard}>
                <input type="radio" name="service" value={name} required={i === 0} className="h-4 w-4 accent-amber" />
                {name}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label className="label" htmlFor={`${formName}-property`}>Property type</label>
          <select id={`${formName}-property`} name="property" defaultValue="" className="field">
            <option value="">Select…</option>
            <option>Detached house</option>
            <option>Semi / townhouse</option>
            <option>Duplex or rental property</option>
            <option>Commercial or industrial</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor={`${formName}-message`}>Describe the problem *</label>
          <textarea
            id={`${formName}-message`}
            name="message"
            required
            rows={4}
            placeholder="Where is the crack, the water or the mold? How long has it been happening?"
            className="field resize-y"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------ Step 2 */}
      <div ref={stepRefs[1]} hidden={step !== 1} className="mt-5 space-y-5">
        <fieldset>
          <legend className="label">Photos (optional, up to 3)</legend>
          <p className="-mt-0.5 mb-3 text-[13px] text-concrete-500">
            A clear photo of the problem often lets us give you a price range before we visit. 8 MB
            total.
          </p>
          <div className="grid gap-2.5">
            {[1, 2, 3].map((n) => (
              <label key={n} className="flex items-center gap-3 rounded-md border border-dashed border-concrete-300 px-4 py-2.5 text-[14px] text-ink-700 hover:border-amber">
                <span className="w-16 shrink-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-concrete-500">
                  Photo {n}
                </span>
                <input
                  type="file"
                  name={`photo${n}`}
                  accept="image/*"
                  className="w-full text-[13px] file:mr-3 file:rounded file:border-0 file:bg-ink-900 file:px-3 file:py-1.5 file:text-[12px] file:font-semibold file:uppercase file:tracking-[0.06em] file:text-white"
                />
              </label>
            ))}
          </div>
          {fileError && (
            <p role="alert" className="mt-2 text-[13px] font-medium text-red-700">
              {fileError}
            </p>
          )}
        </fieldset>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label" htmlFor={`${formName}-address`}>Street address or postal code *</label>
            <input id={`${formName}-address`} name="address" required autoComplete="street-address" className="field" />
          </div>
          <div>
            <label className="label" htmlFor={`${formName}-city`}>Area *</label>
            <select id={`${formName}-city`} name="city" required defaultValue="" className="field">
              <option value="" disabled>Choose one</option>
              {site.serviceAreas.map((a) => (
                <option key={a}>{a}</option>
              ))}
              <option>Somewhere else nearby</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor={`${formName}-urgency`}>Timeline</label>
            <select id={`${formName}-urgency`} name="urgency" defaultValue="" className="field">
              <option value="">Select…</option>
              <option>ASAP — water is coming in</option>
              <option>Within 1–3 months</option>
              <option>Planning ahead / getting prices</option>
            </select>
          </div>
          {variant === 'booking' && (
            <>
              <div>
                <label className="label" htmlFor="booking-date">Preferred visit date</label>
                <input id="booking-date" name="preferred_date" type="date" className="field" />
              </div>
              <div>
                <label className="label" htmlFor="booking-time">Preferred time</label>
                <select id="booking-time" name="preferred_time" defaultValue="" className="field">
                  <option value="">Any time</option>
                  <option>Morning (7am – 11am)</option>
                  <option>Midday (11am – 2pm)</option>
                  <option>Afternoon (2pm – 6pm)</option>
                  <option>Saturday</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------ Step 3 */}
      <div ref={stepRefs[2]} hidden={step !== 2} className="mt-5 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label" htmlFor={`${formName}-name`}>Your name *</label>
            <input id={`${formName}-name`} name="name" required autoComplete="name" className="field" />
          </div>
          <div>
            <label className="label" htmlFor={`${formName}-phone`}>Phone *</label>
            <input id={`${formName}-phone`} name="phone" type="tel" required autoComplete="tel" className="field" />
          </div>
          <div>
            <label className="label" htmlFor={`${formName}-email`}>Email *</label>
            <input id={`${formName}-email`} name="email" type="email" required autoComplete="email" className="field" />
          </div>
        </div>
        <fieldset>
          <legend className="label">Best way to reach you</legend>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {['Call', 'Text', 'Email', 'WhatsApp'].map((m, i) => (
              <label key={m} className={`${optionCard} justify-center !px-3`}>
                <input type="radio" name="contact_pref" value={m} defaultChecked={i === 0} className="sr-only" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label className="label" htmlFor={`${formName}-heard`}>How did you find us?</label>
          <select id={`${formName}-heard`} name="heard" defaultValue="" className="field">
            <option value="">Select…</option>
            <option>Google search</option>
            <option>Google Maps</option>
            <option>Referred by someone</option>
            <option>Saw a truck or a job site</option>
            <option>Facebook or Instagram</option>
            <option>Other</option>
          </select>
        </div>
        <label className="flex items-start gap-3 text-[13.5px] leading-snug text-ink-700">
          <input type="checkbox" name="consent" value="yes" required className="mt-0.5 h-4 w-4 shrink-0 accent-amber" />
          <span>
            I agree to be contacted about this request. We use your details only to answer it — see
            our{' '}
            <a href="/privacy" className="underline hover:text-ink-900">
              privacy policy
            </a>
            . *
          </span>
        </label>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 rounded-md border border-red-300 bg-red-50 p-4 text-[14px] text-red-800">
          That did not send. Please call or WhatsApp{' '}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>{' '}
          and we will take the details over the phone.
        </p>
      )}

      {/* ---------------------------------------------------------- Controls */}
      <div className="mt-7 flex items-center justify-between gap-4 border-t border-concrete-200 pt-6">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-ghost">
            Back
          </button>
        ) : (
          <p className="text-[12.5px] text-concrete-500">Free. No obligation.</p>
        )}
        {step < STEPS.length - 1 ? (
          <button key="next" type="button" onClick={next} className="btn-primary">
            Next
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M11.3 4.3l5 5a1 1 0 010 1.4l-5 5-1.4-1.4 3.3-3.3H3v-2h10.2L9.9 5.7z" />
            </svg>
          </button>
        ) : (
          <button key="submit" type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
            {status === 'sending'
              ? 'Sending…'
              : variant === 'booking'
                ? 'Request this visit'
                : 'Get my detailed quote'}
          </button>
        )}
      </div>
    </form>
  );
}
