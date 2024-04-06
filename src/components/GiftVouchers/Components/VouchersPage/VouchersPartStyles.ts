import styled, { css, keyframes } from "styled-components"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    align-items: center;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    padding: 0 16px;
    align-items: center;
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
  text-transform: uppercase;
  font-weight: 400;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 100%;
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`

export const VoucherList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 58px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    padding: 0 16px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
  }

  @media (max-width: 480px) {
    width: 375px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
  }
`