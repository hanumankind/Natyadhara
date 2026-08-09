import { CalendarDays, Clock } from 'lucide-react'
import { schedule, siteConfig } from '@/lib/site-config'
import { LotusDivider } from '@/components/lotus-divider'

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green">
            Class Schedule
          </p>
          <h2
            id="schedule-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-maroon sm:text-4xl lg:text-5xl"
          >
            Timings & Batches
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/75">
            Choose the batch that suits your family&apos;s routine. New batches
            begin regularly for ages {siteConfig.ageLimit}.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {schedule.map((batch) => (
            <div
              key={batch.title}
              className="relative overflow-hidden rounded-2xl border border-gold/50 bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-gold/15" />
              <h3 className="font-serif text-2xl text-maroon">{batch.title}</h3>

              <dl className="mt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green/15 text-green">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-green">
                      Days
                    </dt>
                    <dd className="font-serif text-lg text-foreground">
                      {batch.days}
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-maroon">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-green">
                      Timing
                    </dt>
                    <dd className="font-serif text-lg text-foreground">
                      {batch.time}
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-foreground/70">
                {batch.note}
              </p>
            </div>
          ))}
        </div>

        <LotusDivider className="mt-16" />
      </div>
    </section>
  )
}
