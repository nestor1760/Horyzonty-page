import './App.css'
import AboutPart from './components/AboutPart'
import FoodPart from './components/FoodPart/FoodPart'
import Footer from './components/Footer'
import GalleryPart from './components/GalleryPart/GalleryPart'
import VouchersPart from './components/GiftVouchers/VouchersPart'
import GuidesPart from './components/GuidePart/GuidesPart'
import Header from './components/Header'
import IntroPart from './components/IntroPart'
import NightStayPart from './components/NightStayPart/NightStayPart'
import TourPart from './components/TourPart/TourPart'
import { Wrapper } from './styled-components/Wrapper'

function App() { 

  return (
      <Wrapper>
          <Header />
          <IntroPart id='intro'/>
          <AboutPart id='about'/>
          <GalleryPart id='gallery'/>
          <TourPart id='tour'/>
          <GuidesPart id='guides'/>
          <FoodPart id='food'/>
          <NightStayPart id='nightstay'/>
          <VouchersPart id='vouchers'/>
          <Footer id='contact'/>
      </Wrapper>
  )
}

export default App
