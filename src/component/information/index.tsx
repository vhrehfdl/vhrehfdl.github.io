import { useState } from "react"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { Reveal, SectionLabel } from "../reveal"

const showToast = (msg: string) => {
  const el = document.createElement("div")
  el.className = "toast"
  el.textContent = msg
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 1600)
}

type Account = {
  who: string
  name: string
  bank: string
  no: string
}

const parseAccount = (
  relation: string,
  name: string,
  account?: string,
): Account | null => {
  if (!account) return null
  const idx = account.indexOf(" ")
  const bank = idx > 0 ? account.slice(0, idx) : account
  const no = idx > 0 ? account.slice(idx + 1).trim() : ""
  return { who: relation, name, bank, no }
}

const buildAccounts = (
  source: { relation: string; name: string; account?: string }[],
): Account[] =>
  source
    .map(({ relation, name, account }) => parseAccount(relation, name, account))
    .filter((a): a is Account => a !== null)

const AccountList = ({ list }: { list: Account[] }) => {
  const [open, setOpen] = useState<number | null>(null)
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast("계좌번호가 복사되었습니다")
    } catch {
      showToast("복사에 실패했습니다")
    }
  }
  return (
    <div className="acc-list">
      {list.map((a, i) => (
        <div
          key={i}
          className={`acc-item ${open === i ? "is-open" : ""}`}
        >
          <button
            className="acc-row"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="acc-who">{a.who}</span>
            <span className="acc-name">{a.name}</span>
            <span className="acc-caret">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="acc-detail">
              <div className="acc-bank">{a.bank}</div>
              <div className="acc-no">{a.no}</div>
              <button className="acc-copy" onClick={() => copy(a.no)}>
                복사
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export const Information = () => {
  const [tab, setTab] = useState<"groom" | "bride">("groom")

  const groomAccounts = buildAccounts(GROOM_INFO)
  const brideAccounts = buildAccounts(BRIDE_INFO)
  const accounts = tab === "groom" ? groomAccounts : brideAccounts

  return (
    <section className="acc">
      <Reveal>
        <SectionLabel en="WITH HEART" ko="마음 전하기" />
      </Reveal>
      <Reveal delay={100}>
        <p className="acc-intro">
          참석이 어려워 직접 축하해주지 못하는
          <br />
          분들을 위해 계좌번호를 기재하였습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <div className="acc-tabs">
          <button
            className={`acc-tab ${tab === "groom" ? "is-on" : ""}`}
            onClick={() => setTab("groom")}
          >
            신랑측
          </button>
          <button
            className={`acc-tab ${tab === "bride" ? "is-on" : ""}`}
            onClick={() => setTab("bride")}
          >
            신부측
          </button>
        </div>
      </Reveal>
      <Reveal delay={240}>
        <AccountList list={accounts} />
      </Reveal>
    </section>
  )
}
