import styled, { css, keyframes } from "styled-components"

export const StyledFooter = styled.div`
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

export const Text = styled.p<{ inView: boolean}>`
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

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #B1B1B1;
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