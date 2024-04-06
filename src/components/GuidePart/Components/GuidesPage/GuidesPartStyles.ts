import styled, { css, keyframes } from "styled-components"

export const StyledContainer = styled.div`
  width: 1110px;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
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
  margin: 0 0 22px 0;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    font-size: 22px;
    margin-bottom: 21px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    font-size: 22px;
    margin-bottom: 21px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
    margin-bottom: 21px;
  }
`

export const TextContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    margin-bottom: 30px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 343px;
    margin-bottom: 30px;
  }
`

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  margin-bottom: 25px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 13px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    flex-direction: column;
    margin-bottom: 13px;
  }

  @media (max-width: 480px) {
    width: 343px;
    flex-direction: column;
    margin-bottom: 13px;
  }
`

export const Button = styled.button`
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-left: 34px;
  }
`