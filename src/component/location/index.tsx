import { Map, MapNavigation } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { Reveal, SectionLabel } from "../reveal"

export const Location = () => {
  return (
    <section className="loc location">
      <Reveal>
        <SectionLabel en="LOCATION" ko="오시는 길" />
      </Reveal>
      <Reveal delay={100}>
        <div className="addr">
          식장: 그라운드333 (바이더그린)
          <br />
          주차: 산빛공원 공영주차장
        </div>
      </Reveal>
      <Reveal delay={180}>
        <Map />
      </Reveal>
      <Reveal delay={240}>
        <MapNavigation />
      </Reveal>
      <Reveal delay={320}>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            • 지하철 <b>4호선 인덕원역</b> 택시 <b>8분</b> 거리
            <br />
            • 인덕원역 <b>2번 출구</b> 마을버스 <b>12번</b>
            <br />
            &nbsp;&nbsp;[인덕원 IT밸리] 하차 도보 <b>3분</b>
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>산빛공원 공영주차장</b> 검색
            <br />
            주차 요금은 당일 <b>저녁 8시</b>까지 출차 시 무료입니다.
            <br />
            (주차장 입구에서 배부하는 주차권을 반드시 수령하시어, 출차 시
            직원에게 제출해 주십시오)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 산빛공원에 주차 후 셔틀버스를 이용하시면 더 편하게
              오실 수 있습니다. (주차장 입구에서 셔틀버스 상시운행)
            </b>
          </div>
          <div />
          <div className="content">
            <b>주차장 ↔ 예식장 이동 안내</b>
            <br />• 도보 이용 시: 약 <b>10분</b> 소요
            <br />• 셔틀버스 이용 시: 약 <b>2분</b> 소요
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <span className="meal-icon">🍽️</span>
          </div>
          <div className="heading">식사 안내</div>
          <div />
          <div className="content">
            <b>시간</b> · 16:30 ~ 18:30
            <br />
            <b>장소</b> · 1층 연회장
          </div>
        </div>
      </Reveal>
    </section>
  )
}
