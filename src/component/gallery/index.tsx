import { useEffect, useState } from "react"
import { GALLERY_IMAGES, thumb } from "../../images"
import { Reveal, SectionLabel } from "../reveal"

const Lightbox = ({
  items,
  index,
  onClose,
  onChange,
}: {
  items: string[]
  index: number
  onClose: () => void
  onChange: (i: number) => void
}) => {
  const next = () => onChange((index + 1) % items.length)
  const prev = () => onChange((index - 1 + items.length) % items.length)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })
  return (
    <div className="lb" onClick={onClose}>
      <img
        src={items[index]}
        alt=""
        className="lb-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lb-close" onClick={onClose}>
        ×
      </button>
      <button
        className="lb-nav lb-prev"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
      >
        ‹
      </button>
      <button
        className="lb-nav lb-next"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
      >
        ›
      </button>
      <div className="lb-count">
        {index + 1} / {items.length}
      </div>
    </div>
  )
}

export const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="gal">
      <Reveal>
        <SectionLabel en="GALLERY" ko="우리의 순간" />
      </Reveal>
      <Reveal delay={120}>
        <div className="gal-all-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={i}
              type="button"
              className="gal-all-cell"
              onClick={() => setOpen(i)}
            >
              <img src={thumb(src)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </Reveal>
      {open !== null && (
        <Lightbox
          items={GALLERY_IMAGES}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
    </section>
  )
}
