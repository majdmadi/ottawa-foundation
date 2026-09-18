import { Section, SectionHead } from '@/components/Section';
import ProjectGallery from '@/components/BeforeAfter';
import { projects, withPhotos } from '@/lib/projects';
import CTA from '@/components/CTA';
import ServiceAreas from '@/components/ServiceAreas';

export const metadata = {
  title: 'Projects',
  description:
    'Before-and-after foundation, concrete and mold jobs across Ottawa, Kanata, Orléans, Barrhaven and the surrounding area.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x py-14 sm:py-20">
          <SectionHead
            dark
            eyebrow="Recent work"
            title="Before, and after"
            intro="Foundation work is invisible once it is done — which is exactly why we photograph it. Drag the handle on any photo to compare."
          />
        </div>
      </section>

      <Section>
        <div className="container-x">
          <ProjectGallery projects={withPhotos(projects)} />
        </div>

        <div className="container-x mt-12 rounded-lg border border-dashed border-concrete-300 bg-concrete-100 p-6 text-[14.5px] leading-relaxed text-ink-700">
          <strong className="font-semibold text-ink-950">Note for the owner:</strong> replace these
          four with your own jobs. For each one send a before shot and an after shot taken from the
          same spot, plus the neighbourhood and roughly how long it took. Six to eight real jobs here
          will do more for enquiries than anything else on the site.
        </div>
      </Section>

      <Section className="bg-concrete-100 !py-14">
        <div className="container-x">
          <h2 className="h3 text-ink-950">Where these jobs were</h2>
          <div className="mt-6">
            <ServiceAreas />
          </div>
        </div>
      </Section>

      <CTA
        title="Your basement could be on this page next"
        body="Send a photo of what is worrying you and we will tell you whether it is a small fix or a real problem."
      />
    </>
  );
}
