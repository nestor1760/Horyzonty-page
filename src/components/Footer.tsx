import styled, { css, keyframes } from 'styled-components';
import { Container } from '../styled-components/Container';
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { ItemHeader } from '../styled-components/ItemHeader';
import { NavigationItem } from '../styled-components/NavigationItem';
import { useInView } from 'react-intersection-observer';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { FooterProps } from '../types/types';

const StyledFooter = styled.div`
  width: 1110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    padding: 0 16px;
  }
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

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
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

const FooterImg = styled.img<{ inView: boolean}>`
  width: 100vw;
  object-fit: cover;
  ${({ inView }) => inView && css`
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  `};
`

const ContactContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 78px 0 0 0;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    margin: 20px 0 0 0;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    margin: 20px 0 0 0;
    padding: 0 16px;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`
const ItemText = styled.p<{ inView: boolean}>`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
`

const SocialItem = styled.div<{ inView: boolean}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 33px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (max-width: 768px) {
    align-items: center;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
`

const Footer = (props: FooterProps) => {    
  const {ref: footerRef, inView: footerIsVisible} = useInView()
  const {windowWidth} = useWindowWidth()

  return (
    <StyledFooter ref={footerRef}>
      <ItemHeader margin='58px 0 63px 0' width='1110px'>
        <NavigationItem width='126px' fontSize='24px' id={props.id}>kontakty</NavigationItem>
        <Text inView={footerIsVisible}>Jeśli masz pytania dotyczące naszych wycieczek górskich, bonów podarunkowych lub chciałbyś dowiedzieć się więcej o trasach, wrażeniach i możliwościach, skontaktuj się z nami.</Text>
      </ItemHeader>
      <FooterImg inView={footerIsVisible} src='/media/footer.png' alt='forest landscape'/>
      <ContactContainer>
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
            <IoLogoInstagram size={30} style={{marginRight: windowWidth > 1109 ? '49px' : '23px'}}/>
            <SocialLink href='https://www.instagram.com/' target='_blank'>instagram</SocialLink>
          </SocialItem>
          <SocialItem inView={footerIsVisible}>
            <FaSquareFacebook size={30} style={{marginRight: windowWidth > 1109 ? '49px' : '23px'}}/>
            <SocialLink href='https://www.facebook.com/' target='_blank'>facebook</SocialLink>
          </SocialItem>
        </ContactItem>
      </ContactContainer>
    </StyledFooter>
  )
}

export default Footer
