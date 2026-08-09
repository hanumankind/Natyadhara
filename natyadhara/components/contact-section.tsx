import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function ContactSection() {
  const { contact } = siteConfig

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-parchment py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green">
            Contact Us
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-maroon sm:text-4xl lg:text-5xl"
          >
            Come, Begin Your Journey
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/75">
            We would love to hear from you. Reach out for admissions, class
            details or a visit to our studio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex h-full items-start gap-4 rounded-2xl border border-gold/40 bg-card p-5 transition-colors hover:border-gold hover:bg-gold/5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-maroon">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-green">
                    Email
                  </span>
                  <span className="mt-1 block break-words font-serif text-lg text-foreground">
                    {contact.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`}
                className="flex h-full items-start gap-4 rounded-2xl border border-gold/40 bg-card p-5 transition-colors hover:border-gold hover:bg-gold/5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/15 text-green">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-green">
                    Mobile
                  </span>
                  <span className="mt-1 block font-serif text-lg text-foreground">
                    {contact.phonePrimary}
                  </span>
                  <span className="block font-serif text-lg text-foreground">
                    {contact.phoneSecondary}
                  </span>
                </span>
              </a>
            </li>
            <li className="sm:col-span-2">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-start gap-4 rounded-2xl border border-gold/40 bg-card p-5 transition-colors hover:border-gold hover:bg-gold/5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-maroon">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-green">
                    Instagram
                  </span>
                  <span className="mt-1 block font-serif text-lg text-foreground">
                    {contact.instagramHandle}
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <address className="flex flex-col justify-between gap-5 rounded-2xl border border-gold/50 bg-card p-6 not-italic sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/15 text-green">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-widest text-green">
                  Our Studio
                </span>
                <p className="mt-2 font-serif text-xl leading-relaxed text-foreground">
                  {contact.address}
                </p>
              </div>
            </div>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                contact.address,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 font-semibold text-maroon underline-offset-4 hover:underline"
            >
              Open in Google Maps
              <span aria-hidden="true">→</span>
            </Link>
          </address>
        </div>
      </div>
    </section>
  )
}
