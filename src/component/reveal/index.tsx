import { useEffect, useRef, useState, ReactNode } from "react"

export const useReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return { ref, shown }
}

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

export const Reveal = ({ children, delay = 0, className = "" }: Props) => {
  const { ref, shown } = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-shown" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

type SectionLabelProps = { en: string; ko: string }
export const SectionLabel = ({ en, ko }: SectionLabelProps) => (
  <div className="sec-label">
    <span className="sec-rule" />
    <div className="sec-en">{en}</div>
    <div className="sec-ko">{ko}</div>
  </div>
)
