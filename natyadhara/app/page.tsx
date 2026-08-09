import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { GallerySection } from '@/components/gallery-section'
import { ScheduleSection } from '@/components/schedule-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
