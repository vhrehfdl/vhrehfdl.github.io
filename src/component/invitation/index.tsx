import { useState } from "react"
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

type ContactItem = {
  rel: string
  name: string
  phone?: string
}

const ContactRow = ({ rel, name, phone }: ContactItem) => (
  <div className="contact-row">
    <span className="contact-rel">{rel}</span>
    <span className="contact-name">{name}</span>
    {phone ? (
      <a className="contact-icn" href={`tel:${phone}`} aria-label="전화">
        ☎
      </a>
    ) : (
      <span className="contact-icn is-disabled">☎</span>
    )}
    {phone ? (
      <a className="contact-icn" href={`sms:${phone}`} aria-label="문자">
        ✉
      </a>
    ) : (
      <span className="contact-icn is-disabled">✉</span>
    )}
  </div>
)

const ContactModal = ({ onClose }: { onClose: () => void }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>
        ×
      </button>
      <div className="modal-en">CONTACT</div>
      <div className="modal-title">축하 인사 전하기</div>
      <p className="modal-sub">전화, 문자메세지로 축하 인사를 전해보세요.</p>

      <div className="contact-block">
        <div className="contact-h">신랑측</div>
        <ContactRow rel="신랑" name={GROOM_FULLNAME} phone="010-7722-4623" />
        <ContactRow rel="아버지" name={GROOM_FATHER} />
        <ContactRow rel="어머니" name={GROOM_MOTHER} />
      </div>
      <div className="contact-block">
        <div className="contact-h">신부측</div>
        <ContactRow rel="신부" name={BRIDE_FULLNAME} phone="010-2994-2644" />
        <ContactRow rel="아버지" name={BRIDE_FATHER} />
        <ContactRow rel="어머니" name={BRIDE_MOTHER} />
      </div>
    </div>
  </div>
)

export const Invitation = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="greeting">
      <Reveal>
        <SectionLabel en="INVITATION" ko="모시는 글" />
      </Reveal>
      <Reveal delay={120}>
        <p className="greet-poem">
          파도가 밀려와 약속이 되는 날
          <br />
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
      <Reveal delay={400}>
        <button className="greet-cta" onClick={() => setOpen(true)}>
          연락하기
        </button>
      </Reveal>
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </section>
  )
}
