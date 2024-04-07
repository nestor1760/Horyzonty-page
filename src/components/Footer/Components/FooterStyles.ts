import styled, { css } from "styled-components"
import { black_color, fadeIn, mobile_screen, second_color, slideLeftAnimation, small_tablet_screen, tablet_screen } from "../../../GlobalStyles"

export const StyledFooter = styled.div`
  width: 1110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    padding: 0 16px;
  }

  @media ${mobile_screen} {
    width: 375px;
    padding: 0 16px;
  }
`

export const Text = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media ${small_tablet_screen} {
    width: 450px;
    font-size: 24px;
  }

  @media ${mobile_screen} {
    width: 343px;
    font-size: 20px;
  }
`

export const FooterImg = styled.img<{ inView: boolean}>`
  width: 100vw;
  object-fit: cover;
  ${({ inView }) => inView && css`
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  `};
`

export const ContactContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 78px 0 0 0;

  @media ${tablet_screen} {
    width: 769px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    margin: 20px 0 0 0;
    padding: 0 16px;
  }

  @media ${mobile_screen} {
    width: 375px;
    margin: 20px 0 0 0;
    padding: 0 16px;
  }
`

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${second_color};
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`
export const ItemText = styled.p<{ inView: boolean}>`
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

export const SocialItem = styled.div<{ inView: boolean}>`
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

export const SocialLink = styled.a`
  font-size: 24px;
  font-weight: 400;
  color: ${black_color};
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