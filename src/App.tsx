import './App.css'
import AboutPart from './components/AboutPart/Components/AboutPart'
import FoodPart from './components/FoodPart/Components/FoodPage/FoodPage'
import Footer from './components/Footer/Components/Footer'
import GalleryPart from './components/GalleryPart/Components/GalleryPage/GalleryPage'
import VouchersPart from './components/GiftVouchers/Components/VouchersPage/VouchersPart'
import GuidesPart from './components/GuidePart/Components/GuidesPage/GuidesPart'
import Header from './components/Header/Components/Header'
import IntroPart from './components/IntroPart/Components/IntroPart'
import NightStayPart from './components/NightStayPart/Components/NightStayPage/NightStayPart'
import TourPart from './components/TourPart/Components/TourPage/TourPart'
import { Wrapper } from './styled-components/Wrapper'

function App() { 
  return (
    <Wrapper zIndex='1'>
        <Header />
        <IntroPart id='intro'/>
        <AboutPart id='about'/>
        <GalleryPart id='gallery'/>
        <TourPart id='tour'/>
        <GuidesPart id='guides'/>
        <FoodPart id='food'/>
        <NightStayPart id='nightstay'/>
        <VouchersPart id='vouchers' />
        <Footer id='contact'/>
    </Wrapper>
  )
}

export default App

