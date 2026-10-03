import Link from 'next/link';
import { site } from '@/lib/site';
import { areaHref } from '@/lib/areas';

export default function ServiceAreas() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {site.serviceAreas.map((area) => {
        const href = areaHref(area);
        const cls = 'block rounded-full border border-concrete-300 px-4 py-2 text-[14px] font-medium text-ink-800';
        return (
          <li key={area}>
            {href ? (
              <Link href={href} className={`${cls} hover:border-amber hover:text-amber-deep`}>{area}</Link>
            ) : (
              <span className={cls}>{area}</span>
            )}
          </li>
        );
      })}
      <li className="rounded-full border border-dashed border-concrete-300 px-4 py-2 text-[14px] text-concrete-500">
        Not listed? Call and ask.
      </li>
    </ul>
  );
}
