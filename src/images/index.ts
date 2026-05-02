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

export const BEACH_3 = beach3
export const BEACH_4 = beach4
export const PINE_2 = pine2

export const COVER_IMAGE = heroAerial

// 전체보기 갤러리 — 우리 사진 컨셉 흐름: 눈 → 숲 → 바다
// (표지·구간 브레이크에 쓰인 hero-aerial / beach-3 / beach-4 / pine-2 는 제외)
export const GALLERY_IMAGES = [
  // 눈 (snow)
  snowAerial,
  heroSnow,
  snow2,
  snow3,
  snow4,
  snow5,
  snow6,
  // 숲 (forest / bamboo)
  pine1,
  pine3,
  pine4,
  veilBamboo,
  bouquetSun,
  kiss,
  // 바다 (sea)
  beach1,
  beach2,
]

// 미리보기 모자이크 — 다양성을 위해 별도 큐레이션 (8장, 모자이크 정확히 채움)
export const GALLERY_PREVIEW = [
  snowAerial, // 0: 4×3 큰
  veilBamboo, // 1: 2×3 세로
  beach1, // 2: 3×2 와이드
  snow3, // 3: 3×2 와이드
  pine1, // 4: 2×2
  snow5, // 5: 2×2
  bouquetSun, // 6: 2×2
  kiss, // 7: 6×3 풀폭 footer
]
