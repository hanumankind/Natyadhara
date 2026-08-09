import Image from 'next/image'
import { galleryImages } from '@/lib/site-config'
import { LotusDivider } from '@/components/lotus-divider'

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-parchment py-16 md:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-maroon sm:text-4xl lg:text-5xl"
          >
            Moments of Grace
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/75">
            A glimpse of our practice, recitals and the joy of learning.
            {' '}
            <span className="italic">Sample images — to be replaced with our own photographs.</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-xl border border-gold/40 bg-card ${
                index === 0 ? 'col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[4/5]' : 'aspect-[4/5]'
              }`}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>

        <LotusDivider className="mt-16" />
      </div>
    </section>
  )
}
