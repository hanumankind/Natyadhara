import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { RegistrationForm } from '@/components/registration-form'
import { LotusDivider } from '@/components/lotus-divider'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Registration | Natyadhara Nirthya Peetam',
  description:
    'Register your child for Bharatanatyam classes at Natyadhara Nirthya Peetam under the guidance of Ms. Monicaa.',
}

export default function RegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-parchment">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green">
              Registration
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-maroon sm:text-5xl">
              Enroll for Bharatanatyam
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/75">
              Begin the journey with {siteConfig.fullName}. Fill in a few
              details and we&apos;ll get in touch to confirm the batch. Open to
              ages {siteConfig.ageLimit}.
            </p>
            <LotusDivider className="mt-8" />
          </div>

          <div className="mt-10">
            <RegistrationForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
