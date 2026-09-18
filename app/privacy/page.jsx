import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata = { title: 'Privacy policy' };

/**
 * TEMPLATE. Written to match how this site actually handles data (one contact
 * form, no accounts, no advertising pixels). Have the client read it and
 * confirm it is accurate before launch — and if analytics or an ad pixel is
 * added later, this page has to be updated to say so.
 */
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="September 2026">
      <p>
        {site.legalName} (&ldquo;we&rdquo;) operates this website. This policy explains what
        personal information we collect through it, why, and what we do with it.
      </p>

      <h2>What we collect</h2>
      <p>
        We collect only what you type into a form on this site: your name, phone number, email
        address, property address or neighbourhood, the service you are asking about, your timeline and
        preferred way to be contacted, any photos you choose to upload, and anything you write in the
        message field. There are no accounts and no logins.
      </p>

      <h2>Why we collect it</h2>
      <p>
        To respond to your request — to call or email you back, book an assessment, prepare a quote,
        and carry out work you hire us to do. We do not sell your information, and we do not share it
        with anyone except where it is necessary to do the work you asked for (for example, a
        supplier sizing a window) or where the law requires it.
      </p>

      <h2>How it is handled</h2>
      <p>
        Form submissions are processed by our website host and delivered to our email. They are kept
        as long as needed to serve you and to keep ordinary business records, and are then deleted.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site does not set advertising cookies and does not track you across other websites. If
        we add website analytics in future, this page will be updated to say what is collected.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us what information we hold about you, ask us to correct it, or ask us to delete
        it. Email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
        <a className="underline" href={site.phoneHref}>{site.phone}</a> and we will deal with it.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}, {site.address.city}, {site.address.region}
        <br />
        {site.email} · {site.phone}
      </p>
    </LegalPage>
  );
}
