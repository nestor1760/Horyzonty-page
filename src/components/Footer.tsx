import styled from 'styled-components'
import { Container } from '../styled-components/Container'
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";

const StyledFooter = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`

const Title = styled.p`
  width: 570px;
  font-size: 24px;
  font-weight: 400;
  color: #B1B1B1;
  text-transform: uppercase;
`

const Text = styled.p`
  max-width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
`
const FooterImg = styled.img`
  max-width: 1110px;
  object-fit: contain;
`

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #B1B1B1;
  text-transform: uppercase;
  margin-bottom: 30px;
`
const ItemText = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
`

const SocialItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 33px;
`

const SocialLink = styled.a`
  font-size: 24px;
  font-weight: 400;
  color: black;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <Container width='100%'>
      <StyledFooter>
        <Container padding='58px 0 63px 0' width='1110px' justify='space-between'>
          <Title>kontakty</Title>
          <Text>Jeśli masz pytania dotyczące naszych wycieczek górskich, bonów podarunkowych lub chciałbyś dowiedzieć się więcej o trasach, wrażeniach i możliwościach, skontaktuj się z nami.</Text>
        </Container>
        <FooterImg src='/media/footer.png' alt='forest landscape'/>
        <Container direction='column' margin='78px 0 0 0'>
          <ContactItem>
            <ItemTitle>numer telefonu</ItemTitle>
            <ItemText>+48123456789</ItemText>
          </ContactItem>
          <ContactItem>
            <ItemTitle>grafik pracy</ItemTitle>
            <Container  width='354px' justify='space-between'>
              <ItemText style={{marginRight: '123px'}}>Pn-Sob</ItemText>
              <ItemText>9:00-17:00</ItemText>
            </Container>
          </ContactItem>
          <ContactItem>
            <ItemTitle>sieci społecznościowe</ItemTitle>
            <SocialItem>
              <IoLogoInstagram size={30} style={{marginRight: '49px'}}/>
              <SocialLink href='https://www.instagram.com/' target='_blank'>instagram</SocialLink>
            </SocialItem>
            <SocialItem>
              <FaSquareFacebook size={30} style={{marginRight: '49px'}}/>
              <SocialLink href='https://www.facebook.com/' target='_blank'>facebook</SocialLink>
            </SocialItem>
          </ContactItem>
        </Container>
      </StyledFooter>
    </Container>
  )
}

export default Footer