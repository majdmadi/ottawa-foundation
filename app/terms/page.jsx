import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata = { title: 'Terms of service' };

/**
 * TEMPLATE — covers use of the website only, and states plainly that the
 * contract for the work itself is the signed quote. Have the client read it,
 * and have a lawyer look at it if he wants the work terms covered here too.
 */
export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" updated="September 2026">
      <p>
        These terms cover your use of this website. They are not the contract for construction work —
        that is the written quote you sign, which sets out the scope, the price and the schedule for
        your job.
      </p>

      <h2>Information on this site</h2>
      <p>
        We keep the information here accurate and current, but service descriptions are general.
        Whether a particular repair suits your property can only be settled by looking at it. Nothing
        on this site is a guarantee of a specific result, price or timeline.
      </p>

      <h2>Quotes and pricing</h2>
      <p>
        No price is binding until it is given in writing after an on-site assessment. Written quotes
        are valid for the period stated on them. Where work uncovers conditions that could not be
        seen at the time of quoting, we stop and agree any change with you in writing before
        continuing.
      </p>

      <h2>Enquiries you send</h2>
      <p>
        Use the forms on this site for genuine enquiries. Do not send confidential documents,
        payment card details or anything you would not want sent by ordinary email.
      </p>

      <h2>Third-party links</h2>
      <p>
        Where we link to another website, we are not responsible for its content or its privacy
        practices.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by Ontario law, we are not liable for any loss arising from your use
        of this website. This does not limit our obligations under any contract for work we carry out
        for you.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Province of Ontario and the laws of Canada.</p>

      <h2>Questions</h2>
      <p>
        Email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
        <a className="underline" href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
