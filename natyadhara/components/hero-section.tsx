import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LotusDivider } from '@/components/lotus-divider'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-parchment">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-8 md:py-20 lg:py-24">
        {/* Copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-serif text-lg italic text-green">
            Under the Guidance of {siteConfig.teacher}
          </p>

          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.1] text-maroon sm:text-5xl lg:text-6xl">
            In every gesture, a story.
            <br className="hidden sm:block" /> In every step, a prayer.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-lg leading-relaxed text-foreground/80 md:mx-0">
            Step into the divine world of classical dance and experience the
            beauty of tradition at {siteConfig.fullName}.
          </p>

          <dl className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 md:mx-0">
            <div className="rounded-xl border border-gold/40 bg-card/70 px-4 py-3 text-left">
              <dt className="text-xs font-semibold uppercase tracking-widest text-green">
                Tradition
              </dt>
              <dd className="mt-1 font-serif text-lg text-maroon">
                Bharatanatyam · {siteConfig.style}
              </dd>
            </div>
            <div className="rounded-xl border border-gold/40 bg-card/70 px-4 py-3 text-left">
              <dt className="text-xs font-semibold uppercase tracking-widest text-green">
                Age Limit
              </dt>
              <dd className="mt-1 font-serif text-lg text-maroon">
                {siteConfig.ageLimit}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Button
              render={<Link href="/registration" />}
              nativeButton={false}
              size="lg"
              className="h-12 w-full bg-maroon px-7 text-base text-primary-foreground hover:bg-maroon/90 sm:w-auto"
            >
              Register Your Child
            </Button>
            <Button
              render={<Link href="/#gallery" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 w-full border-gold px-7 text-base text-maroon hover:bg-gold/15 hover:text-maroon sm:w-auto"
            >
              View Gallery
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-gold/50 shadow-xl shadow-maroon/10 md:max-w-md">
            <Image
              src="/images/hero-dancer.png"
              alt={`A Bharatanatyam dancer performing a classical pose, representing training under ${siteConfig.teacher}`}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20" />
          </div>
        </div>
      </div>

      <LotusDivider className="pb-10 md:pb-14" />
    </section>
  )
}
