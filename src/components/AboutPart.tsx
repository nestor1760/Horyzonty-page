import styled, { css, keyframes } from 'styled-components'
import { Container } from '../styled-components/Container'
import { dataAbout } from '../data/dataAbout'
import { ItemHeader } from '../styled-components/ItemHeader'
import { NavigationItem } from '../styled-components/NavigationItem'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hook'
import { aboutDataRest } from '../dataAPI/aboutRest'
import { useInView } from 'react-intersection-observer'

const slideRightAnimation = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeftAnimation = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;
`

const TitleHeader = styled.h1<{ inView: boolean}>`
  font-weight: 400;
  width: 539px;
  height: 186px;
  color: black;
  margin-bottom: 27px;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.6s ease-in-out forwards;
  `};
`

const TitleText = styled.p<{ inView: boolean}>`
  width: 255px;
  font-size: 14px;
  font-weight: 400;
  color: #5A5A5A;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.6s ease-in-out forwards;
  `};
  &:first-child {
    margin-right: 30px;
  }
`

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

const StyledImage = styled.img<{ inView: boolean}>`
  width: 100%;
  object-fit: cover;
  margin-bottom: 99px;
  ${({ inView }) => inView && css`
  animation: ${fadeIn} 0.6s ease-in-out forwards;
`};
`

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyledItem = styled.div<{ inView: boolean}>`
  width: 255px;
  height: 255px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 47px;
  ${({ inView }) => inView && css`
    animation: ${slideDownAnimation} 0.6s ease-in-out forwards;
  `};
  &:last-child {
    margin-right: 0px;
  }
`

const ItemText = styled.p`
  width: 167px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #B1B1B1;
  text-transform: uppercase;
`

const StrongText = styled.p`
  font-size: 80px;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
`

const AboutPart = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.about) 
  
  const {ref: aboutRef, inView: aboutIsVisible} = useInView()

  useEffect(() => {
    dispatch(aboutDataRest(dataAbout))
  }, [])

  return (
      <StyledContainer ref={aboutRef}>
        <ItemHeader width='1110px' padding='107px 0 26px 0' margin='0 auto'>
          <NavigationItem width='570px' fontSize='24px' margin='0' id={id}>o nas</NavigationItem>
          <Container direction='column' width='540px'>
            <TitleHeader inView={aboutIsVisible}>Witamy w firmie Horyzonty - wiodącym touroperatorem specjalizującym się w organizowaniu wycieczek na najwyższy szczyt Polski, górę Rysy!</TitleHeader>
            <Container width='540px'>
              <TitleText inView={aboutIsVisible}>Horyzonty to wysoko wykwalifikowana firma turystyczna z wieloletnim doświadczeniem w organizacji wycieczek i podróży na szczyt Rysy. Zadowolenie klientów jest naszym głównym priorytetem, dlatego oferujemy spersonalizowane podejście do każdej wycieczki. Nasza reputacja opiera się na tysiącach zadowolonych klientów.</TitleText>
              <TitleText inView={aboutIsVisible}>Nasza misja polega na zapewnieniu klientom niezapomnianych przygód i najwyższego poziomu obsługi, pozwalając im cieszyć się wrażeniami z unikalnych krajobrazów i naturalnych piękności Tatr. Wybierz naszą firmę i spełnij swoje marzenie o podróży na Rysy.</TitleText>
            </Container>
          </Container>
        </ItemHeader>
        <StyledImage inView={aboutIsVisible} src='/media/about-us-photo.png' alt='the girl looks at the landscape'/>
        <Container width='1110px' display='flex' justify='space-between'>
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
