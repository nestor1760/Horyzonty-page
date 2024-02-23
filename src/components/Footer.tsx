import styled from 'styled-components'
import { Container } from '../styled-components/Container'

const StyledFooter = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const StyledFooterTitle = styled.p`
  width: 570px;
  font-size: 24px;
  font-weigth: 400;
  color: #B1B1B1;
  text-transform: uppercase;
`

const StyledFooterText = styled.p`
  max-width: 540px;
  font-size: 32px;
  font-weigth: 400;
  text-transform: uppercase;
`
const StyledFooterImg = styled.img`
  width: 100%;
  object-fit: contain;
`

const StyledContactBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const StyledContactTitle = styled.p`
  font-size: 16px;
  font-weigth: 400;
  color: #B1B1B1;
  text-transform: uppercase;
  margin-bottom: 30px;
`
const StyledContactText = styled.p`
  font-size: 24px;
  font-weigth: 400;
  margin-bottom: 40px;
`

const Footer = () => {
  return (
    <Container width='100%'>
      <StyledFooter>
        <Container padding='58px 0 63px 0' width='1110px' justify='space-between'>
          <StyledFooterTitle>kontakty</StyledFooterTitle>
          <StyledFooterText>Jeśli masz pytania dotyczące naszych wycieczek górskich, bonów podarunkowych lub chciałbyś dowiedzieć się więcej o trasach, wrażeniach i możliwościach, skontaktuj się z nami.</StyledFooterText>
        </Container>
        <StyledFooterImg src='/media/footer.png' alt='forest landscape'/>
        <Container direction='column' margin='78px 0 0 0'>
          <StyledContactBlock>
            <StyledContactTitle>numer telefonu</StyledContactTitle>
            <StyledContactText>+48123456789</StyledContactText>
          </StyledContactBlock>
          <StyledContactBlock>
            <StyledContactTitle>grafik pracy</StyledContactTitle>
            <Container  width='354px' justify='space-between'>
              <StyledContactText style={{marginRight: '123px'}}>Pn-Sob</StyledContactText>
              <StyledContactText>9:00-17:00</StyledContactText>
            </Container>
          </StyledContactBlock>
          <StyledContactBlock>
            <StyledContactTitle>sieci społecznościowe</StyledContactTitle>
            {/* add inst and facebook */}
          </StyledContactBlock>
        </Container>
      </StyledFooter>
    </Container>
  )
}

export default Footer