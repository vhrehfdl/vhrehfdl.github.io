type Props = {
  src: string
  en?: string
  caption?: string
  fit?: "cover" | "contain"
}

export const ImageBreak = ({ src, en, caption, fit = "cover" }: Props) => (
  <section className={`img-break ${fit === "contain" ? "is-contain" : ""}`}>
    <img src={src} alt="" />
    {(caption || en) && (
      <div className="img-break-cap">
        {en && <div className="img-break-en">{en}</div>}
        {caption && <div className="img-break-ko">{caption}</div>}
      </div>
    )}
  </section>
)
