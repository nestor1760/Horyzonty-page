import styled from 'styled-components'
import { Container } from '../styled-components/Container'
import { dataAbout } from '../data/dataAbout'

const NavigationItem = styled.p`
  width: 570px;
  font-size: 24px;
  font-weight: 400;
  color: #B1B1B1;
  text-transform: uppercase;
`

const TitleHeader = styled.h1`
  font-weight: 400;
  width: 539px;
  height: 186px;
  color: black;
  margin-bottom: 27px;
  text-transform: uppercase;
`

const TitleText = styled.p`
  width: 255px;
  font-size: 14px;
  font-weight: 400;
  color: #5A5A5A;
  &:first-child {
    margin-right: 30px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 99px;
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
  return (
    <Container width='100%' direction='column'>
        <Container width='1110px' justify='space-between' padding='107px 0 26px 0'>
          <NavigationItem>o nas</NavigationItem>
          <Container direction='column' width='540px'>
            <TitleHeader>Witamy w firmie Horyzonty - wiodącym touroperatorem specjalizującym się w organizowaniu wycieczek na najwyższy szczyt Polski, górę Rysy!</TitleHeader>
            <Container width='540px'>
              <TitleText>Horyzonty to wysoko wykwalifikowana firma turystyczna z wieloletnim doświadczeniem w organizacji wycieczek i podróży na szczyt Rysy. Zadowolenie klientów jest naszym głównym priorytetem, dlatego oferujemy spersonalizowane podejście do każdej wycieczki. Nasza reputacja opiera się na tysiącach zadowolonych klientów.</TitleText>
              <TitleText>Nasza misja polega na zapewnieniu klientom niezapomnianych przygód i najwyższego poziomu obsługi, pozwalając im cieszyć się wrażeniami z unikalnych krajobrazów i naturalnych piękności Tatr. Wybierz naszą firmę i spełnij swoje marzenie o podróży na Rysy.</TitleText>
            </Container>
          </Container>
        </Container>
        <StyledImage src='/media/about-us-photo.png' alt='the girl looks at the landscape'/>
        <Container width='1110px' display='flex' justify='space-between'>
          {dataAbout.map(item => 
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