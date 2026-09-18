import { site } from '@/lib/site';

export default function ServiceAreas() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {site.serviceAreas.map((area) => (
        <li
          key={area}
          className="rounded-full border border-concrete-300 px-4 py-2 text-[14px] font-medium text-ink-800"
        >
          {area}
        </li>
      ))}
      <li className="rounded-full border border-dashed border-concrete-300 px-4 py-2 text-[14px] text-concrete-500">
        Not listed? Call and ask.
      </li>
    </ul>
  );
}
