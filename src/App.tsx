import './App.css'
import AboutPart from './components/AboutPart'
import Footer from './components/Footer'
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
        <Footer />
      </Wrapper>
  )
}

export default App
