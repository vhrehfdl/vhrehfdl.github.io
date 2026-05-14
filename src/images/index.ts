import heroAerial from "./wedding/hero-aerial.jpg"
import heroSnow from "./wedding/hero-snow.jpg"
import beach1 from "./wedding/beach-1.jpg"
import beach2 from "./wedding/beach-2.jpg"
import beach3 from "./wedding/beach-3.jpg"
import beach4 from "./wedding/beach-4.jpg"
import pine1 from "./wedding/pine-1.jpg"
import pine2 from "./wedding/pine-2.jpg"
import pine3 from "./wedding/pine-3.jpg"
import pine4 from "./wedding/pine-4.jpg"
import bouquetSun from "./wedding/bouquet-sun.jpg"
import veilBamboo from "./wedding/veil-bamboo.jpg"
import kiss from "./wedding/kiss.jpg"
import snow2 from "./wedding/snow-2.jpg"
import snow3 from "./wedding/snow-3.jpg"
import snow4 from "./wedding/snow-4.jpg"
import snow5 from "./wedding/snow-5.jpg"
import snow6 from "./wedding/snow-6.jpg"
import snowAerial from "./wedding/snow-aerial.jpg"
import outdoorPortrait from "./wedding/outdoor-portrait.jpg"
import outdoorLocation from "./wedding/outdoor-location.jpg"
import gallery1 from "./wedding/gallery-1.jpg"
import gallery2 from "./wedding/gallery-2.jpg"
import gallery3 from "./wedding/gallery-3.jpg"
import gallery4 from "./wedding/gallery-4.jpg"
import gallery5 from "./wedding/gallery-5.jpg"
import gallery6 from "./wedding/gallery-6.jpg"
import gallery7 from "./wedding/gallery-7.jpg"
import gallery8 from "./wedding/gallery-8.jpg"
import gallery9 from "./wedding/gallery-9.jpg"

// 720px wide thumbnails (50-150KB each) for grid previews
import heroAerialT from "./wedding/thumbs/hero-aerial.jpg"
import heroSnowT from "./wedding/thumbs/hero-snow.jpg"
import beach1T from "./wedding/thumbs/beach-1.jpg"
import beach2T from "./wedding/thumbs/beach-2.jpg"
import beach3T from "./wedding/thumbs/beach-3.jpg"
import beach4T from "./wedding/thumbs/beach-4.jpg"
import pine1T from "./wedding/thumbs/pine-1.jpg"
import pine2T from "./wedding/thumbs/pine-2.jpg"
import pine3T from "./wedding/thumbs/pine-3.jpg"
import pine4T from "./wedding/thumbs/pine-4.jpg"
import bouquetSunT from "./wedding/thumbs/bouquet-sun.jpg"
import veilBambooT from "./wedding/thumbs/veil-bamboo.jpg"
import kissT from "./wedding/thumbs/kiss.jpg"
import snow2T from "./wedding/thumbs/snow-2.jpg"
import snow3T from "./wedding/thumbs/snow-3.jpg"
import snow4T from "./wedding/thumbs/snow-4.jpg"
import snow5T from "./wedding/thumbs/snow-5.jpg"
import snow6T from "./wedding/thumbs/snow-6.jpg"
import snowAerialT from "./wedding/thumbs/snow-aerial.jpg"
import outdoorPortraitT from "./wedding/thumbs/outdoor-portrait.jpg"
import outdoorLocationT from "./wedding/thumbs/outdoor-location.jpg"
import gallery1T from "./wedding/thumbs/gallery-1.jpg"
import gallery2T from "./wedding/thumbs/gallery-2.jpg"
import gallery3T from "./wedding/thumbs/gallery-3.jpg"
import gallery4T from "./wedding/thumbs/gallery-4.jpg"
import gallery5T from "./wedding/thumbs/gallery-5.jpg"
import gallery6T from "./wedding/thumbs/gallery-6.jpg"
import gallery7T from "./wedding/thumbs/gallery-7.jpg"
import gallery8T from "./wedding/thumbs/gallery-8.jpg"
import gallery9T from "./wedding/thumbs/gallery-9.jpg"

export const BEACH_3 = beach3
export const BEACH_4 = beach4
export const PINE_2 = pine2
export const OUTDOOR_PORTRAIT = outdoorPortrait
export const OUTDOOR_LOCATION = outdoorLocation

export const COVER_IMAGE = heroAerial

// 전체보기 갤러리 — 3×3 (사용자 지정 순서)
export const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
]

// 썸네일 매핑 — 그리드/모자이크에 사용 (라이트박스는 원본)
const THUMB_MAP: Record<string, string> = {
  [heroAerial]: heroAerialT,
  [heroSnow]: heroSnowT,
  [beach1]: beach1T,
  [beach2]: beach2T,
  [beach3]: beach3T,
  [beach4]: beach4T,
  [pine1]: pine1T,
  [pine2]: pine2T,
  [pine3]: pine3T,
  [pine4]: pine4T,
  [bouquetSun]: bouquetSunT,
  [veilBamboo]: veilBambooT,
  [kiss]: kissT,
  [snow2]: snow2T,
  [snow3]: snow3T,
  [snow4]: snow4T,
  [snow5]: snow5T,
  [snow6]: snow6T,
  [snowAerial]: snowAerialT,
  [outdoorPortrait]: outdoorPortraitT,
  [outdoorLocation]: outdoorLocationT,
  [gallery1]: gallery1T,
  [gallery2]: gallery2T,
  [gallery3]: gallery3T,
  [gallery4]: gallery4T,
  [gallery5]: gallery5T,
  [gallery6]: gallery6T,
  [gallery7]: gallery7T,
  [gallery8]: gallery8T,
  [gallery9]: gallery9T,
}

export const thumb = (full: string): string => THUMB_MAP[full] ?? full
