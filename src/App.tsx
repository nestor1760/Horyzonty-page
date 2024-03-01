import './App.css'
import AboutPart from './components/AboutPart'
import FoodPart from './components/FoodPart/FoodPart'
import Footer from './components/Footer'
import VouchersPart from './components/GiftVouchers/VouchersPart'
import GuidesPart from './components/GuidePart/GuidesPart'
import Header from './components/Header'
import IntroPart from './components/IntroPart'
import TourPart from './components/TourPart/TourPart'
import { Wrapper } from './styled-components/Wrapper'

function App() {
  return (
      <Wrapper>
        <Header />
        <IntroPart />
        <AboutPart />
        <TourPart/>
        <GuidesPart />
        <FoodPart />
        <VouchersPart />
        <Footer />
      </Wrapper>
  )
}

export default App
