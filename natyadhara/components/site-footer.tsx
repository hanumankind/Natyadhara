import Image from 'next/image'
import Link from 'next/link'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-maroon text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold/50">
              <Image
                src="/images/natyadhara-logo.jpeg"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold text-primary-foreground">
                Natyadhara
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">
                Nirthya Peetam
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm font-serif text-lg italic text-primary-foreground/80">
            &ldquo;{siteConfig.slogan}&rdquo;
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Under the guidance of {siteConfig.teacher} · Bharatanatyam{' '}
            {siteConfig.style}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-serif text-lg text-primary-foreground/85 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-primary-foreground/60 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
