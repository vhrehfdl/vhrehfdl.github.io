import { useEffect, useState, useRef } from "react"
import { useKakao, useNaver } from "../store"
import LockIcon from "../../icons/lock-icon.svg?react"
import UnlockIcon from "../../icons/unlock-icon.svg?react"
import {
  KMAP_PLACE_ID,
  LOCATION,
  NMAP_PLACE_ID,
  WEDDING_HALL_POSITION,
} from "../../const"
import { NAVER_MAP_CLIENT_ID } from "../../env"

const checkDevice = () => {
  const ua = window.navigator.userAgent
  if (ua.match(/(iPhone|iPod|iPad)/)) return "ios"
  if (ua.match(/(Android)/)) return "android"
  return "other"
}

export const Map = () => {
  return NAVER_MAP_CLIENT_ID ? <NaverMap /> : <div>Map is not available</div>
}

const NaverMap = () => {
  const naver = useNaver()
  const ref = useRef<HTMLDivElement>(null)
  const [locked, setLocked] = useState(true)
  const [showLockMessage, setShowLockMessage] = useState(false)
  const lockMessageTimeout = useRef<number | null>(null)

  useEffect(() => {
    if (naver) {
      const map = new naver.maps.Map(ref.current, {
        center: WEDDING_HALL_POSITION,
        zoom: 17,
      })
      new naver.maps.Marker({ position: WEDDING_HALL_POSITION, map })
      return () => {
        map.destroy()
      }
    }
  }, [naver])

  return (
    <div className="map-wrapper">
      {locked && (
        <div
          className="lock"
          onTouchStart={() => {
            setShowLockMessage(true)
            if (lockMessageTimeout.current !== null) {
              clearTimeout(lockMessageTimeout.current)
            }
            lockMessageTimeout.current = setTimeout(
              () => setShowLockMessage(false),
              3000,
            )
          }}
          onMouseDown={() => {
            setShowLockMessage(true)
            if (lockMessageTimeout.current !== null) {
              clearTimeout(lockMessageTimeout.current)
            }
            lockMessageTimeout.current = setTimeout(
              () => setShowLockMessage(false),
              3000,
            )
          }}
        >
          {showLockMessage && (
            <div className="lock-message">
              <LockIcon /> 자물쇠 버튼을 눌러
              <br />
              터치 잠금 해제 후 확대 및 이동해 주세요.
            </div>
          )}
        </div>
      )}
      <button
        className={"lock-button" + (locked ? "" : " unlocked")}
        onClick={() => {
          if (lockMessageTimeout.current !== null) {
            clearTimeout(lockMessageTimeout.current)
          }
          setShowLockMessage(false)
          setLocked((locked) => !locked)
        }}
      >
        {locked ? <LockIcon /> : <UnlockIcon />}
      </button>
      <div className="map-inner" ref={ref}></div>
    </div>
  )
}

export const MapNavigation = () => {
  const kakao = useKakao()

  const openNaver = () => {
    switch (checkDevice()) {
      case "ios":
      case "android":
        window.open(`nmap://place?id=${NMAP_PLACE_ID}`, "_self")
        break
      default:
        window.open(
          `https://map.naver.com/p/entry/place/${NMAP_PLACE_ID}`,
          "_blank",
        )
    }
  }

  const openKakao = () => {
    switch (checkDevice()) {
      case "ios":
      case "android":
        if (kakao)
          kakao.Navi.start({
            name: LOCATION,
            x: WEDDING_HALL_POSITION[0],
            y: WEDDING_HALL_POSITION[1],
            coordType: "wgs84",
          })
        break
      default:
        window.open(
          `https://map.kakao.com/link/map/${KMAP_PLACE_ID}`,
          "_blank",
        )
    }
  }

  return (
    <div className="loc-buttons">
      <button className="loc-btn" onClick={openNaver}>
        <svg
          className="loc-btn-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        네이버지도
      </button>
      <button className="loc-btn" onClick={openKakao}>
        <svg
          className="loc-btn-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
        카카오지도
      </button>
    </div>
  )
}
