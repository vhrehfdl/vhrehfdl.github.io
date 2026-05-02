import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"

export const Cover = () => {
  return (
    <section className="cover">
      <img src={COVER_IMAGE} alt="" className="cover-img" />
      <div className="cover-overlay" />
      <div className="cover-content">
        <div className="cover-top">
          <div className="cover-tagline">Together, Always</div>
        </div>
        <div className="cover-bottom">
          <div className="cover-en">SAVE THE DATE FOR THE WEDDING OF</div>
          <div className="cover-names">
            <span>{GROOM_FULLNAME}</span>
            <span className="cover-amp">&amp;</span>
            <span>{BRIDE_FULLNAME}</span>
          </div>
          <div className="cover-rule" />
          <div className="cover-info">
            {WEDDING_DATE.format(WEDDING_DATE_FORMAT)}
          </div>
          <div className="cover-venue">{LOCATION}</div>
        </div>
      </div>
      <div className="cover-scroll">
        <span>SCROLL</span>
        <span className="cover-scroll-line" />
      </div>
    </section>
  )
}
