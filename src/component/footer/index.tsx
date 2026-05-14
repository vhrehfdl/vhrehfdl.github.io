import {
  BRIDE_FIRSTNAME,
  BRIDE_FULLNAME,
  GROOM_FIRSTNAME,
  GROOM_FULLNAME,
  WEDDING_DATE,
} from "../../const"
import { Reveal } from "../reveal"

const showToast = (msg: string) => {
  const el = document.createElement("div")
  el.className = "toast"
  el.textContent = msg
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 1600)
}

export const Footer = () => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      showToast("초대장 링크가 복사되었습니다")
    } catch {
      showToast("복사에 실패했습니다")
    }
  }

  return (
    <footer className="ft">
      <Reveal>
        <div className="ft-en">THANK YOU</div>
        <div className="ft-line" />
        <div className="ft-quote">
          {GROOM_FULLNAME} ♡ {BRIDE_FULLNAME}의
          <br />
          결혼식에 초대합니다.
        </div>
        <div className="ft-names">
          {GROOM_FIRSTNAME} &nbsp;&amp;&nbsp; {BRIDE_FIRSTNAME}
        </div>
        <div className="ft-date">
          {WEDDING_DATE.format("YYYY . MM . DD")}
        </div>
        <div className="ft-share">
          <button className="ft-share-btn" onClick={copyLink}>
            링크 복사
          </button>
        </div>
      </Reveal>
    </footer>
  )
}
