import {
  BRIDE_FIRSTNAME,
  BRIDE_FULLNAME,
  GROOM_FIRSTNAME,
  GROOM_FULLNAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { Reveal } from "../reveal"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

const showToast = (msg: string) => {
  const el = document.createElement("div")
  el.className = "toast"
  el.textContent = msg
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 1600)
}

export const Footer = () => {
  const kakao = useKakao()

  const sharePages = () => {
    if (!kakao) {
      showToast("카카오 SDK 로딩 중입니다")
      return
    }
    const link = window.location.protocol + "//" + window.location.host + baseUrl
    kakao.Share.sendDefault({
      objectType: "location",
      address: SHARE_ADDRESS,
      addressTitle: SHARE_ADDRESS_TITLE,
      content: {
        title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
        description:
          WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
        imageUrl:
          window.location.protocol +
          "//" +
          window.location.host +
          baseUrl +
          "/preview_image.png",
        link: { mobileWebUrl: link, webUrl: link },
      },
      buttons: [
        {
          title: "초대장 보기",
          link: { mobileWebUrl: link, webUrl: link },
        },
      ],
    })
  }

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
          <button className="ft-share-btn" onClick={sharePages}>
            카카오톡으로 공유하기
          </button>
          <button className="ft-share-btn" onClick={copyLink}>
            링크 복사
          </button>
        </div>
      </Reveal>
    </footer>
  )
}
