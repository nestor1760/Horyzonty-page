import styled, { keyframes } from 'styled-components'
import { Container } from '../styled-components/Container'
import { dataAbout } from '../data/dataAbout'
import { ItemHeader } from '../styled-components/ItemHeader'
import { NavigationItem } from '../styled-components/NavigationItem'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hook'
import { aboutDataRest } from '../dataAPI/aboutRest'

const slideRight = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const TitleHeader = styled.h1`
  font-weight: 400;
  width: 539px;
  height: 186px;
  color: black;
  margin-bottom: 27px;
  text-transform: uppercase;
  animation: ${slideRight} 0.5s ease-in-out forwards;
`

const TitleText = styled.p`
  width: 255px;
  font-size: 14px;
  font-weight: 400;
  color: #5A5A5A;
  animation: ${slideLeft} 0.5s ease-in-out forwards;
  &:first-child {
    margin-right: 30px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 99px;
`

const slideDown = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyledItem = styled.div`
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
  animation: ${slideDown} 0.6s ease-in-out forwards;
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

const AboutPart = () => {
  const dispatch = useAppDispatch()
  const {array} = useAppSelector(state => state.about)  

  useEffect(() => {
    dispatch(aboutDataRest(dataAbout))
  }, [])

  return (
    <Container width='100%' direction='column'>
        <ItemHeader width='1110px' padding='107px 0 26px 0' margin='0 auto'>
          <NavigationItem width='570px' fontSize='24px' margin='0'>o nas</NavigationItem>
          <Container direction='column' width='540px'>
            <TitleHeader>Witamy w firmie Horyzonty - wiodącym touroperatorem specjalizującym się w organizowaniu wycieczek na najwyższy szczyt Polski, górę Rysy!</TitleHeader>
            <Container width='540px'>
              <TitleText>Horyzonty to wysoko wykwalifikowana firma turystyczna z wieloletnim doświadczeniem w organizacji wycieczek i podróży na szczyt Rysy. Zadowolenie klientów jest naszym głównym priorytetem, dlatego oferujemy spersonalizowane podejście do każdej wycieczki. Nasza reputacja opiera się na tysiącach zadowolonych klientów.</TitleText>
              <TitleText>Nasza misja polega na zapewnieniu klientom niezapomnianych przygód i najwyższego poziomu obsługi, pozwalając im cieszyć się wrażeniami z unikalnych krajobrazów i naturalnych piękności Tatr. Wybierz naszą firmę i spełnij swoje marzenie o podróży na Rysy.</TitleText>
            </Container>
          </Container>
        </ItemHeader>
        <StyledImage src='/media/about-us-photo.png' alt='the girl looks at the landscape'/>
        <Container width='1110px' display='flex' justify='space-between'>
          {array.map(item => 
            <StyledItem key={item.id}>
              <ItemText>więcej</ItemText>
              <StrongText>{item.data}</StrongText>
              <ItemText>{item.title}</ItemText>
            </StyledItem>
          )}
        </Container>
    </Container>
  )
}

export default AboutPart
