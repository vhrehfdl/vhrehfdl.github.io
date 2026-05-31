import {
  BRIDE_FATHER,
  BRIDE_FULLNAME,
  BRIDE_MOTHER,
  BRIDE_TITLE,
  GROOM_FATHER,
  GROOM_FULLNAME,
  GROOM_MOTHER,
  GROOM_TITLE,
} from "../../const"
import { Reveal, SectionLabel } from "../reveal"

export const Invitation = () => {
  return (
    <section className="greeting">
      <Reveal>
        <SectionLabel en="INVITATION" ko="모시는 글" />
      </Reveal>
      <Reveal delay={120}>
        <p className="greet-poem">
          소중한 분들을 모시고
          <br />
          사랑의 약속을 하려고 합니다.
        </p>
      </Reveal>
      <Reveal delay={220}>
        <p className="greet-body">
          햇살이 뜨거울 땐 가려주고,
          <br />
          비가 오면 우산이 되어주는
          <br />
          부부가 되겠습니다.
          <br />
          <br />
          기쁜 날 함께 하시어
          <br />
          저희의 앞날을 축복해 주세요.
        </p>
      </Reveal>
      <Reveal delay={320}>
        <div className="greet-family">
          <div className="fam-row">
            <span className="fam-parents">
              {GROOM_FATHER} · {GROOM_MOTHER}
            </span>
            <span className="fam-rel">의 {GROOM_TITLE}</span>
            <span className="fam-name">{GROOM_FULLNAME}</span>
          </div>
          <div className="fam-row">
            <span className="fam-parents">
              {BRIDE_FATHER} · {BRIDE_MOTHER}
            </span>
            <span className="fam-rel">의 {BRIDE_TITLE}</span>
            <span className="fam-name">{BRIDE_FULLNAME}</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
