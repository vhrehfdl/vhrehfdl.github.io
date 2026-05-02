import { useEffect, useState } from "react"
import { GALLERY_IMAGES, GALLERY_PREVIEW, thumb } from "../../images"
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
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="gal">
      <Reveal>
        <SectionLabel en="GALLERY" ko="우리의 순간" />
      </Reveal>
      <Reveal delay={120}>
        <div className="gal-grid">
          {GALLERY_PREVIEW.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`gal-cell gal-cell-${i % 8}`}
              onClick={() => setOpen(GALLERY_IMAGES.indexOf(src))}
            >
              <img src={thumb(src)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={220}>
        <button className="gal-all" onClick={() => setShowAll(true)}>
          사진 전체보기
        </button>
      </Reveal>
      {open !== null && (
        <Lightbox
          items={GALLERY_IMAGES}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
      {showAll && (
        <div className="modal" onClick={() => setShowAll(false)}>
          <div
            className="modal-card modal-card-wide"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowAll(false)}
            >
              ×
            </button>
            <div className="gal-all-grid">
              {GALLERY_IMAGES.map((src, i) => (
                <button
                  key={i}
                  className="gal-all-cell"
                  onClick={() => {
                    setShowAll(false)
                    setOpen(i)
                  }}
                >
                  <img src={thumb(src)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
