export function Section({ children, className = '', dark = false, id }) {
  return (
    <section
      id={id}
      className={`${dark ? 'dark-section bg-ink-950 text-concrete-300' : ''} py-16 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, dark = false, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-[62ch]`}>
      {eyebrow && (
        <p className={dark ? 'eyebrow-light' : 'eyebrow'}>
          <span className="h-px w-8 bg-amber" />
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-4 h2 ${dark ? 'text-white' : 'text-ink-950'}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-[16px] leading-relaxed ${dark ? 'text-concrete-400' : 'text-ink-700'}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
