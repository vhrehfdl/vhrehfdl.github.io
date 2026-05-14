import { useEffect, useRef, useState } from "react"
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
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    // horizontal swipe: |dx| >= 50px and dominantly horizontal
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next()
      else prev()
    }
  }
  return (
    <div
      className="lb"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
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
