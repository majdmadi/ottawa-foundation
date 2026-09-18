export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x py-12 sm:py-16">
          <h1 className="h1 text-white">{title}</h1>
          <p className="mt-4 text-[14px] text-concrete-500">Last updated: {updated}</p>
        </div>
      </section>
      <div className="container-x py-14 sm:py-20">
        <div className="max-w-prose space-y-5 text-[16px] leading-relaxed text-ink-800 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-ink-950 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </>
  );
}
