import styled, { css, keyframes } from "styled-components"

export const StyledIntro = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 105px;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    padding: 0 16px 40px 16px;
    margin-top: 56px;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    align-items: center;
    padding: 0 16px;
    margin-top: 56px;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (max-width: 480px) {
    width: 375px;
    align-items: center;
    margin-top: 56px;
    padding: 0 16px;
    border-bottom: 1px solid #B1B1B1;
  }
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
const slideRightAnimation = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const Title = styled.p<{ inView: boolean}>`
  width: 826px;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 65px 0 41px 0;
  ${({ inView }) => inView && css`
    animation: ${slideDownAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    font-size: 32px;
    margin: 24px 0 30px 0;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    margin: 24px 0 30px 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    width: 100%;
    margin: 24px 0 30px 0;
  }
`

export const Text = styled.p<{ inView: boolean}>`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  color: #2D2C2C;
  margin: 61px 0 54px 0;
  text-align: start;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    margin: 47px 0 64px 0;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin: 47px 0 64px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 47px 0 64px 0;
  }
`