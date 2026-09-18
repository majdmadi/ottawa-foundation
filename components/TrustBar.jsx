import { site } from '@/lib/site';

/**
 * Only facts the client has stated are shown. Warranty stays hidden until the
 * client confirms the length (set credentials.warrantyConfirmed in lib/site.js).
 */
export default function TrustBar() {
  const items = [
    { value: `${site.yearsInBusiness}+`, label: 'Years on Ottawa foundations' },
    { value: 'Free', label: 'On-site assessment & written quote' },
    { value: 'Insured', label: 'Liability certificate on request' },
    { value: 'Local', label: 'Owner on every job, start to finish' },
  ];
  if (site.credentials.warrantyConfirmed) {
    items[3] = { value: `${site.credentials.warrantyYears} yr`, label: 'Workmanship warranty' };
  }
  return (
    <section aria-label="Why homeowners trust us" className="border-b border-concrete-200 bg-white">
      <ul className="container-x grid grid-cols-2 divide-concrete-200 lg:grid-cols-4 lg:divide-x">
        {items.map((item) => (
          <li key={item.label} className="px-2 py-6 lg:px-6">
            <p className="font-display text-[30px] font-bold uppercase leading-none text-ink-900">
              {item.value}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-snug text-concrete-500">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
