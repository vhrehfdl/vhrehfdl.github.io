import "./App.scss"
import { Cover } from "./component/cover"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Location } from "./component/location"
import { Information } from "./component/information"
import { Footer } from "./component/footer"
import { ImageBreak } from "./component/imageBreak"
import { BEACH_3, BEACH_4, PINE_2 } from "./images"

function App() {
  return (
    <div className="page">
      <div className="device">
        <div className="invitation scrollroot">
          <Cover />
          <Invitation />
          <ImageBreak src={BEACH_3} />
          <Calendar />
          <ImageBreak
            src={BEACH_4}
            en="OUR MOMENTS"
            caption="파도 위, 우리의 약속"
          />
          <Gallery />
          <ImageBreak src={PINE_2} />
          <Location />
          <Information />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
