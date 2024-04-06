import styled, { css, keyframes } from "styled-components"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 63px 0 46px 0;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    align-items: center;
    padding: 0 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    align-items: center;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    width: 375px;
    align-items: center;
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
  text-transform: uppercase;
  font-weight: 400;
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

export const ItemContainer = styled.div`
  position: relative;
  width: 1110px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 28px;
  align-items: end;

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

export const GalleryNavigation = styled.div`
  position: absolute;
  top: 0;
  right: 341px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 200px;
`

export const Loader = styled.div`
  width: 100%;
  font-size: 32px;
  text-align: center;
`