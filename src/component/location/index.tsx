import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 4호선 <b>인덕원역 2번 출구</b>로 나와서
            <br />
            <b>
              인덕원역에서 셔틀버스를 이용하시면 편리합니다.
            </b>
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            목적지 근처 정류장: <b>인덕원 IT밸리</b>
            <br />
            → 하차 후 도보 <b>약 5분</b> 이동
            <br />
            (인덕원역 방면에서 오면 <b>일반버스 83번</b> 또는 <b>마을버스 12번</b> 이용이 가장 간단합니다.)
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
            <b>그라운드333</b> 또는 <b>성고개로 138</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 건물과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 안내: 공영주차장에 주차 후 셔틀버스를 이용하시면 더 편하게 오실 수 있습니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
