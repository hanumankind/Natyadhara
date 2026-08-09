'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.fullName} home`}
          onClick={() => setOpen(false)}
        >
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/images/natyadhara-logo.jpeg"
              alt=""
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold tracking-wide text-maroon">
              Natyadhara
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-green">
              Nirthya Peetam
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-serif text-lg text-foreground/80 transition-colors hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
          <Button
            render={<Link href="/registration" />}
            nativeButton={false}
            className="ml-2 h-10 bg-maroon px-5 text-sm text-primary-foreground hover:bg-maroon/90"
          >
            Enroll Now
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-maroon md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-gold/30 bg-background md:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-serif text-xl text-foreground/85 transition-colors hover:text-maroon"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button
                render={<Link href="/registration" onClick={() => setOpen(false)} />}
                nativeButton={false}
                className="h-11 w-full bg-maroon text-base text-primary-foreground hover:bg-maroon/90"
              >
                Enroll Now
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
