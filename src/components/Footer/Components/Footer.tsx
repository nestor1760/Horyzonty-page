import { Container } from '../../../styled-components/Container';
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { ItemHeader } from '../../../styled-components/ItemHeader';
import { NavigationItem } from '../../../styled-components/NavigationItem';
import { useInView } from 'react-intersection-observer';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { ContactContainer, ContactItem, FooterImg, ItemText, ItemTitle, SocialItem, SocialLink, StyledFooter, Text } from './FooterStyles';
import { FooterProps } from './interfaces';

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
