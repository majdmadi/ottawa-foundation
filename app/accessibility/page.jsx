import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata = { title: 'Accessibility' };

/**
 * AODA statement, requested on the brief. Ontario's accessible-information
 * requirement applies on request for small private organisations; this page
 * states the commitment and gives a real way to ask for a format that works.
 * The claims here are only true if the build stays accessible — keep the
 * checklist in README.md in mind when adding sections later.
 */
export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" updated="September 2026">
      <p>
        {site.legalName} is committed to serving people of all abilities, in line with the
        Accessibility for Ontarians with Disabilities Act (AODA).
      </p>

      <h2>This website</h2>
      <p>
        The site has been built with accessibility in mind and aims to meet WCAG 2.1 Level AA. In
        practice that means:
      </p>
      <ul>
        <li>every page can be used with a keyboard alone, with a visible focus indicator;</li>
        <li>text meets contrast requirements against its background;</li>
        <li>headings and landmarks are structured so screen readers can navigate the page;</li>
        <li>form fields have real labels, and errors are announced, not just coloured;</li>
        <li>text resizes without breaking the layout, and the site works on a phone.</li>
      </ul>

      <h2>Accessible formats</h2>
      <p>
        If you need information from this site — a quote, a service description, anything else — in a
        different format such as large print, plain text, or read to you over the phone, ask and we
        will provide it at no extra cost. Call{' '}
        <a className="underline" href={site.phoneHref}>{site.phone}</a> or email{' '}
        <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>On site</h2>
      <p>
        Tell us in advance if there is anything we should know about access at your property or how
        you would prefer we communicate, and we will work with it.
      </p>

      <h2>Feedback</h2>
      <p>
        If something on this site does not work for you, we want to hear about it. Contact us by
        phone or email above and we will fix it and reply. Feedback can be given in whatever format
        is easiest for you.
      </p>
    </LegalPage>
  );
}
