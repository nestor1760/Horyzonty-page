import { Container } from '../../../styled-components/Container'
import { dataAbout } from '../../../data/dataAbout'
import { ItemHeader } from '../../../styled-components/ItemHeader'
import { NavigationItem } from '../../../styled-components/NavigationItem'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { aboutDataRest } from '../../../dataAPI/aboutRest'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '../../../hooks/useWindowWidth'
import { ItemText, StrongText, StyledContainer, StyledImage, StyledItem, TitleHeader, TitleText, TitleTextContainer } from './AboutPartStyles'
import { IAboutProps } from './interfaces'

const AboutPart = ({ id }: IAboutProps) => {
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()
  const {ref: aboutRef, inView: aboutIsVisible} = useInView()
  const {array} = useAppSelector(state => state.about) 
  
  useEffect(() => {
    dispatch(aboutDataRest(dataAbout))
  }, [])

  return (
    <StyledContainer ref={aboutRef}>
      <ItemHeader 
        width='1110px' 
        padding='107px 0 26px 0' 
        margin='0 auto'
      >
        <NavigationItem width='108px' fontSize='24px' margin='0' id={id}>o nas</NavigationItem>
        <TitleTextContainer>
          <TitleHeader inView={aboutIsVisible}>Witamy w firmie Horyzonty - wiodącym touroperatorem specjalizującym się w organizowaniu wycieczek na najwyższy szczyt Polski, górę Rysy!</TitleHeader>
          <Container width='540px' direction={windowWidth > 769 ? '' : 'column'}>
            <TitleText inView={aboutIsVisible}>Horyzonty to wysoko wykwalifikowana firma turystyczna z wieloletnim doświadczeniem w organizacji wycieczek i podróży na szczyt Rysy. Zadowolenie klientów jest naszym głównym priorytetem, dlatego oferujemy spersonalizowane podejście do każdej wycieczki. Nasza reputacja opiera się na tysiącach zadowolonych klientów.</TitleText>
            <TitleText inView={aboutIsVisible}>Nasza misja polega na zapewnieniu klientom niezapomnianych przygód i najwyższego poziomu obsługi, pozwalając im cieszyć się wrażeniami z unikalnych krajobrazów i naturalnych piękności Tatr. Wybierz naszą firmę i spełnij swoje marzenie o podróży na Rysy.</TitleText>
          </Container>
        </TitleTextContainer>
      </ItemHeader>
      <StyledImage inView={aboutIsVisible} src='/media/about-us-photo.png' alt='the girl looks at the landscape'/>
      <Container width='1110px' display='flex' justify='space-between' wrap={windowWidth > 1109 ? "" : 'wrap'}>
        {array.map(item => 
          <StyledItem inView={aboutIsVisible} key={item.id}>
            <ItemText>więcej</ItemText>
            <StrongText>{item.data}</StrongText>
            <ItemText>{item.title}</ItemText>
          </StyledItem>
        )}
      </Container>
    </StyledContainer>
  )
}

export default AboutPart
