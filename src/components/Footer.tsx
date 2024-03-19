import styled, { css, keyframes } from 'styled-components';
import { Container } from '../styled-components/Container';
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { ItemHeader } from '../styled-components/ItemHeader';
import { NavigationItem } from '../styled-components/NavigationItem';
import { useInView } from 'react-intersection-observer';

const StyledFooter = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;
`

const slideLeftAnimation = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Text = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FooterImg = styled.img<{ inView: boolean}>`
  width: 100%;
  object-fit: cover;
  ${({ inView }) => inView && css`
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  `};
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
const ItemText = styled.p<{ inView: boolean}>`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};
`

const SocialItem = styled.div<{ inView: boolean}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 33px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};
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

type FooterProps = {
  id: string,
}

const Footer = (props: FooterProps) => {  
  const {ref: footerRef, inView: footerIsVisible} = useInView()

  return (
      <StyledFooter ref={footerRef}>
        <ItemHeader padding='58px 0 63px 0' width='1110px'>
          <NavigationItem width='570px' fontSize='24px' id={props.id}>kontakty</NavigationItem>
          <Text inView={footerIsVisible}>Jeśli masz pytania dotyczące naszych wycieczek górskich, bonów podarunkowych lub chciałbyś dowiedzieć się więcej o trasach, wrażeniach i możliwościach, skontaktuj się z nami.</Text>
        </ItemHeader>
        <FooterImg inView={footerIsVisible} src='/media/footer.png' alt='forest landscape'/>
        <Container direction='column' margin='78px 0 0 0'>
          <ContactItem>
            <ItemTitle>numer telefonu</ItemTitle>
            <ItemText inView={footerIsVisible}>+48123456789</ItemText>
          </ContactItem>
          <ContactItem>
            <ItemTitle>grafik pracy</ItemTitle>
            <Container  width='354px' justify='space-between'>
              <ItemText inView={footerIsVisible} style={{marginRight: '123px'}}>Pn-Sob</ItemText>
              <ItemText inView={footerIsVisible}>9:00-17:00</ItemText>
            </Container>
          </ContactItem>
          <ContactItem>
            <ItemTitle>sieci społecznościowe</ItemTitle>
            <SocialItem inView={footerIsVisible}>
              <IoLogoInstagram size={30} style={{marginRight: '49px'}}/>
              <SocialLink href='https://www.instagram.com/' target='_blank'>instagram</SocialLink>
            </SocialItem>
            <SocialItem inView={footerIsVisible}>
              <FaSquareFacebook size={30} style={{marginRight: '49px'}}/>
              <SocialLink href='https://www.facebook.com/' target='_blank'>facebook</SocialLink>
            </SocialItem>
          </ContactItem>
        </Container>
      </StyledFooter>
  )
}

export default Footer
