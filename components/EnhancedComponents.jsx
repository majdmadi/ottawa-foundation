/**
 * ENHANCED COMPONENT EXAMPLES
 * Modern redesign for Ottawa Foundation website
 * Replace existing components with these modernized versions
 */

// ============================================================================
// 1. ENHANCED SERVICE CARD COMPONENT
// ============================================================================
export function ServiceCardModern({ service, index }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-concrete-200 bg-white transition-all duration-300 hover:border-amber hover:shadow-xl hover:scale-105">
      {/* Decorative top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber to-amber-bright" />

      {/* Icon/Image area (placeholder or actual image) */}
      <div className="aspect-video bg-gradient-to-br from-ink-900 to-ink-800 flex items-center justify-center overflow-hidden">
        <div className="text-amber text-5xl opacity-20">⚒️</div>
      </div>

      {/* Content area */}
      <div className="p-7">
        <h3 className="text-xl font-bold text-ink-950 mb-3 group-hover:text-amber transition-colors">
          {service.name}
        </h3>

        <p className="text-concrete-600 text-[15px] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-7">
          {service.features?.slice(0, 2).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[14px] text-concrete-600">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Link */}
        <a
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-semibold text-amber hover:text-amber-bright transition-colors group/link"
        >
          Learn more
          <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// 2. ENHANCED PROCESS STEPS COMPONENT
// ============================================================================
export function ProcessStepsModern() {
  const steps = [
    {
      num: '01',
      icon: '📋',
      title: 'Assessment',
      description: 'We visit your property, inspect the foundation, and provide a written quote.',
    },
    {
      num: '02',
      icon: '✓',
      title: 'Planning',
      description: 'You approve the work. We plan the approach to fix the problem properly.',
    },
    {
      num: '03',
      icon: '🔧',
      title: 'Execution',
      description: 'Our crew does the work. Same team from start to finish, no handoffs.',
    },
    {
      num: '04',
      icon: '✨',
      title: 'Completion',
      description: 'We clean up, grade your property, and leave everything as we found it.',
    },
  ];

  return (
    <div className="relative">
      {/* Background connecting line */}
      <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-amber via-amber-bright to-amber opacity-30"
           style={{ top: '60px' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step card */}
            <div className="bg-white rounded-xl border border-concrete-200 p-6 hover:border-amber hover:shadow-lg transition-all duration-300">
              {/* Step number circle */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-amber to-amber-bright flex items-center justify-center font-bold text-white text-lg shadow-lg">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 mt-4">{step.icon}</div>

              {/* Content */}
              <h4 className="text-lg font-bold text-ink-950 mb-2">{step.title}</h4>
              <p className="text-concrete-600 text-[14px] leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow connector (hide on last) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 -right-6 text-2xl text-amber-bright opacity-40">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 3. ENHANCED BEFORE/AFTER GALLERY COMPONENT
// ============================================================================
export function BeforeAfterGalleryModern() {
  const projects = [
    {
      title: 'Complete Foundation Waterproofing',
      location: 'East End, Ottawa',
      beforeText: 'Water seeping through wall',
      afterText: 'Fully sealed and dry',
    },
    {
      title: 'Basement Wall Crack Repair',
      location: 'Kanata',
      beforeText: 'Growing structural crack',
      afterText: 'Professionally sealed',
    },
    {
      title: 'Mold Remediation & Prevention',
      location: 'Barrhaven',
      beforeText: 'Visible mold growth',
      afterText: 'Clean, sealed, protected',
    },
  ];

  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-ink-800 to-ink-900 rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-concrete-400">
                <div className="text-center">
                  <div className="text-5xl mb-4">⚠️</div>
                  <p className="font-semibold">Before</p>
                  <p className="text-sm mt-1">{project.beforeText}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
              Before
            </div>
          </div>

          {/* After */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-green-600">
                <div className="text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="font-semibold">After</p>
                  <p className="text-sm mt-1">{project.afterText}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
              After
            </div>
          </div>

          {/* Project info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-ink-950 mb-2">{project.title}</h3>
            <p className="text-concrete-600">📍 {project.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// 4. ENHANCED TRUST BADGES COMPONENT
// ============================================================================
export function TrustBadgesModern() {
  const badges = [
    {
      icon: '🛡️',
      title: 'Fully Insured',
      description: 'Liability coverage & certificates provided',
    },
    {
      icon: '⭐',
      title: '10 Years',
      description: 'Trusted by Ottawa homeowners',
    },
    {
      icon: '✓',
      title: '5-Year Warranty',
      description: 'Workmanship guaranteed',
    },
    {
      icon: '🏆',
      title: 'Licensed & Certified',
      description: 'Professional standards maintained',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <div key={index} className="bg-gradient-to-br from-white to-concrete-50 border border-concrete-200 rounded-xl p-6 hover:shadow-lg hover:border-amber transition-all duration-300 text-center">
          <div className="text-5xl mb-4">{badge.icon}</div>
          <h4 className="text-lg font-bold text-ink-950 mb-1">{badge.title}</h4>
          <p className="text-sm text-concrete-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// 5. ENHANCED CTA SECTION COMPONENT
// ============================================================================
export function CTASectionModern() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 to-ink-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, #F5A524 0%, transparent 50%)',
      }} />

      <div className="container-x relative text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
          Ready to fix your foundation?
        </h2>

        <p className="text-lg text-concrete-300 max-w-2xl mx-auto">
          Get a free, no-obligation assessment from our experienced team.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-10 py-4 bg-gradient-to-r from-amber to-amber-bright text-ink-950 font-bold text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse">
            Get Your Free Quote
          </button>
          <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-ink-950 transition-all duration-300">
            Call: 343-336-4342
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXPORT ALL ENHANCED COMPONENTS
// ============================================================================
export const EnhancedComponents = {
  ServiceCardModern,
  ProcessStepsModern,
  BeforeAfterGalleryModern,
  TrustBadgesModern,
  CTASectionModern,
};
