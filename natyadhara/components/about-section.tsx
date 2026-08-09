import { Sparkles, HeartHandshake, GraduationCap } from 'lucide-react'
import { LotusDivider } from '@/components/lotus-divider'
import { siteConfig } from '@/lib/site-config'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Authentic Tradition',
    body: `Training rooted in the classical Bharatanatyam ${siteConfig.style}, preserving the grace and discipline of the temple arts.`,
  },
  {
    icon: HeartHandshake,
    title: 'Nurturing Guidance',
    body: `Personal attention from ${siteConfig.teacher}, guiding every disciple with patience, warmth and devotion.`,
  },
  {
    icon: Sparkles,
    title: 'For Every Beginner',
    body: `Open to children and adults aged ${siteConfig.ageLimit}. No prior experience needed — only the willingness to learn.`,
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green">
            About Us
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-maroon sm:text-4xl lg:text-5xl"
          >
            A Sacred Journey Through Bharatanatyam
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/80">
            {siteConfig.fullName} is a home for classical dance where ancient
            storytelling meets devotion. Under the guidance of{' '}
            {siteConfig.teacher}, students learn not only the technique of
            Bharatanatyam but also its spirit — expression, rhythm and reverence
            passed down through generations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-gold/40 bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:text-left"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-maroon">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-2xl text-maroon">{title}</h3>
              <p className="mt-2 leading-relaxed text-foreground/75">{body}</p>
            </article>
          ))}
        </div>

        <LotusDivider className="mt-16" />
      </div>
    </section>
  )
}
