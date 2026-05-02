type Props = {
  src: string
  en?: string
  caption?: string
}

export const ImageBreak = ({ src, en, caption }: Props) => (
  <section className="img-break">
    <img src={src} alt="" />
    {(caption || en) && (
      <div className="img-break-cap">
        {en && <div className="img-break-en">{en}</div>}
        {caption && <div className="img-break-ko">{caption}</div>}
      </div>
    )}
  </section>
)
