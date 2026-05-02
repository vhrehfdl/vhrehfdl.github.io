import { useEffect, useState } from "react"
import {
  BRIDE_FIRSTNAME,
  dayjs,
  GROOM_FIRSTNAME,
  WEDDING_DATE,
} from "../../const"
import { Reveal, SectionLabel } from "../reveal"

export const Calendar = () => {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const targetMs = WEDDING_DATE.valueOf()
  const diff = Math.max(0, targetMs - now)
  const day = Math.floor(diff / 86400000)
  const hour = Math.floor((diff % 86400000) / 3600000)
  const min = Math.floor((diff % 3600000) / 60000)
  const sec = Math.floor((diff % 60000) / 1000)

  // 자정 기준 D-day 계산 (당일/지난 날 메시지 분기용)
  const dayDiff = WEDDING_DATE.startOf("day").diff(
    dayjs(now).startOf("day"),
    "day",
  )

  const startDow = WEDDING_DATE.startOf("month").day()
  const daysInMonth = WEDDING_DATE.daysInMonth()
  const targetDate = WEDDING_DATE.date()

  const cells: (number | null)[] = []
  for (let i = 0; i < startDow; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section className="cal">
      <Reveal>
        <SectionLabel en="THE DAY" ko="예식일" />
      </Reveal>
      <Reveal delay={120}>
        <div className="cal-month">
          <div className="cal-month-en">{WEDDING_DATE.format("YYYY")}</div>
          <div className="cal-month-num">
            {WEDDING_DATE.format("M")}
            <span className="cal-month-suffix">월</span>
          </div>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <div className="cal-grid">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d, i) => (
            <div key={d} className={`cal-dow ${i === 0 ? "is-sun" : ""}`}>
              {d}
            </div>
          ))}
          {cells.map((c, i) => {
            const dow = i % 7
            const isTarget = c === targetDate
            return (
              <div
                key={i}
                className={`cal-day ${dow === 0 ? "is-sun" : ""} ${isTarget ? "is-target" : ""}`}
              >
                {c && <span className="cal-num">{c}</span>}
                {isTarget && <span className="cal-ring" />}
              </div>
            )
          })}
        </div>
      </Reveal>
      <Reveal delay={300}>
        <div className="cal-time">
          {WEDDING_DATE.format("YYYY년 M월 D일 dddd")} · 오후{" "}
          {WEDDING_DATE.format("h시")}
        </div>
      </Reveal>
      <Reveal delay={380}>
        <div className="dday">
          <div className="dday-cell">
            <span className="dday-num">{pad(day)}</span>
            <span className="dday-lbl">DAYS</span>
          </div>
          <div className="dday-cell">
            <span className="dday-num">{pad(hour)}</span>
            <span className="dday-lbl">HOUR</span>
          </div>
          <div className="dday-cell">
            <span className="dday-num">{pad(min)}</span>
            <span className="dday-lbl">MIN</span>
          </div>
          <div className="dday-cell">
            <span className="dday-num">{pad(sec)}</span>
            <span className="dday-lbl">SEC</span>
          </div>
        </div>
        <div className="dday-msg">
          {dayDiff > 0 ? (
            <>
              {GROOM_FIRSTNAME} ♡ {BRIDE_FIRSTNAME}의 결혼식이{" "}
              <strong>{dayDiff}</strong>일 남았습니다
            </>
          ) : dayDiff === 0 ? (
            <>
              오늘은 {GROOM_FIRSTNAME} ♡ {BRIDE_FIRSTNAME}의{" "}
              <strong>결혼식</strong>날입니다
            </>
          ) : (
            <>
              {GROOM_FIRSTNAME} ♡ {BRIDE_FIRSTNAME}의 결혼식이{" "}
              <strong>{-dayDiff}</strong>일 지났습니다
            </>
          )}
        </div>
      </Reveal>
    </section>
  )
}
