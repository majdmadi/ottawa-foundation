const steps = [
  {
    title: 'You call or send the form',
    body: 'Tell us what you are seeing. If you can send a photo on WhatsApp, do — it often tells us more than a paragraph.',
  },
  {
    title: 'We come and look',
    body: 'Free, on site, no sales pitch. We find the water, check the wall, and photograph what we find so you can see it too.',
  },
  {
    title: 'You get a written quote',
    body: 'Itemised, with what is included and what is not. If the job does not need doing, we will tell you that instead.',
  },
  {
    title: 'We do the work and clean up',
    body: 'Fixed scope, agreed dates. The site gets put back — graded, swept and tidy — before we invoice.',
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg bg-concrete-200 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="bg-white p-6">
          <span className="font-display text-[40px] font-bold leading-none text-concrete-200">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-3 text-[16px] font-bold uppercase tracking-[0.04em] text-ink-950">
            {step.title}
          </h3>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
