import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import IntroPart from './components/IntroPart'
import { Wrapper } from './styled-components/Wrapper'

function App() {
  return (
      <Wrapper>
        <Header />
        <IntroPart />
        <Footer />
      </Wrapper>
  )
}

export default App
