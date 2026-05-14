import heroAerial from "./wedding/hero-aerial.jpg"
import beach4 from "./wedding/beach-4.jpg"
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
import beach4T from "./wedding/thumbs/beach-4.jpg"
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

// 1600px JPEG q82 (130-520KB each) for the lightbox
import heroAerialL from "./wedding/large/hero-aerial.jpg"
import beach4L from "./wedding/large/beach-4.jpg"
import outdoorPortraitL from "./wedding/large/outdoor-portrait.jpg"
import outdoorLocationL from "./wedding/large/outdoor-location.jpg"
import gallery1L from "./wedding/large/gallery-1.jpg"
import gallery2L from "./wedding/large/gallery-2.jpg"
import gallery3L from "./wedding/large/gallery-3.jpg"
import gallery4L from "./wedding/large/gallery-4.jpg"
import gallery5L from "./wedding/large/gallery-5.jpg"
import gallery6L from "./wedding/large/gallery-6.jpg"
import gallery7L from "./wedding/large/gallery-7.jpg"
import gallery8L from "./wedding/large/gallery-8.jpg"
import gallery9L from "./wedding/large/gallery-9.jpg"

export const BEACH_4 = beach4
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

const THUMB_MAP: Record<string, string> = {
  [heroAerial]: heroAerialT,
  [beach4]: beach4T,
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

const LARGE_MAP: Record<string, string> = {
  [heroAerial]: heroAerialL,
  [beach4]: beach4L,
  [outdoorPortrait]: outdoorPortraitL,
  [outdoorLocation]: outdoorLocationL,
  [gallery1]: gallery1L,
  [gallery2]: gallery2L,
  [gallery3]: gallery3L,
  [gallery4]: gallery4L,
  [gallery5]: gallery5L,
  [gallery6]: gallery6L,
  [gallery7]: gallery7L,
  [gallery8]: gallery8L,
  [gallery9]: gallery9L,
}

export const thumb = (full: string): string => THUMB_MAP[full] ?? full
export const large = (full: string): string => LARGE_MAP[full] ?? full
