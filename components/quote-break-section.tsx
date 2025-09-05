import React from "react"

type QuoteBreakSectionProps = {
  image: string
  quote: string
  author?: string
  heightClassName?: string
}

export default function QuoteBreakSection({ image, quote, author, heightClassName }: QuoteBreakSectionProps) {
  return (
    <section
      className={`relative bg-cover bg-center bg-fixed ${heightClassName ?? "h-32 md:h-48"}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Break quote section"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <figure className="max-w-4xl text-center">
          <blockquote className="text-white text-4xl leading-relaxed">
            “{quote}”
          </blockquote>
          {author ? <figcaption className="mt-3 text-white/80 text-lg">— {author}</figcaption> : null}
        </figure>
      </div>
    </section>
  )
}


