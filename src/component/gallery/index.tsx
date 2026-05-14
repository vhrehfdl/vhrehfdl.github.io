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
  const touchStart = useRef<{ x: number; y: number; locked: boolean } | null>(
    null,
  )
  const swipedRef = useRef(false)
  const [dragX, setDragX] = useState(0)
  const [animating, setAnimating] = useState(false)
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
    if (animating) return
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY, locked: false }
    swipedRef.current = false
    setDragX(0)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    const start = touchStart.current
    if (!start || animating) return
    const t = e.touches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    if (!start.locked) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return
      if (Math.abs(dx) > Math.abs(dy)) {
        start.locked = true
      } else {
        touchStart.current = null
        setDragX(0)
        return
      }
    }
    swipedRef.current = true
    setDragX(dx)
  }
  const onTouchEnd = () => {
    const start = touchStart.current
    touchStart.current = null
    if (!start || !start.locked) return
    const vw = window.innerWidth
    const threshold = Math.min(vw * 0.2, 80)
    if (Math.abs(dragX) >= threshold) {
      const dir = dragX < 0 ? 1 : -1
      setAnimating(true)
      setDragX(dir > 0 ? -vw : vw)
      window.setTimeout(() => {
        if (dir > 0) next()
        else prev()
        setAnimating(false)
        setDragX(0)
      }, 220)
    } else {
      setAnimating(true)
      setDragX(0)
      window.setTimeout(() => setAnimating(false), 220)
    }
  }
  return (
    <div
      className="lb"
      onClick={() => {
        if (swipedRef.current) {
          swipedRef.current = false
          return
        }
        onClose()
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={items[index]}
        alt=""
        className="lb-img"
        style={{
          transform: `translateX(${dragX}px)`,
          transition: animating ? "transform 220ms ease-out" : "none",
        }}
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
