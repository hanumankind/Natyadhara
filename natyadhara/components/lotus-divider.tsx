import { cn } from '@/lib/utils'

/**
 * A small decorative lotus divider inspired by the academy's logo flourish.
 * Purely ornamental, so it is hidden from screen readers.
 */
export function LotusDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-3 text-gold', className)}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold sm:w-20" />
      <svg
        width="34"
        height="20"
        viewBox="0 0 34 20"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M17 18C17 18 13 12 13 8C13 4 15 2 17 2C19 2 21 4 21 8C21 12 17 18 17 18Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
        <path
          d="M17 18C17 18 9 15 6 11C4 8 5 5 7 4C9 3 12 4 14 8C16 12 17 18 17 18Z"
          fill="currentColor"
          fillOpacity="0.55"
        />
        <path
          d="M17 18C17 18 25 15 28 11C30 8 29 5 27 4C25 3 22 4 20 8C18 12 17 18 17 18Z"
          fill="currentColor"
          fillOpacity="0.55"
        />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold sm:w-20" />
    </div>
  )
}
