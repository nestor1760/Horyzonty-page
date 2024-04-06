import styled, { css, keyframes } from "styled-components"

const slideRightAnimation = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeftAnimation = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
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

export const TitleHeader = styled.h1<{ inView: boolean}>`
  font-weight: 400;
  width: 539px;
  height: 186px;
  color: black;
  margin-bottom: 27px;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.6s ease-in-out forwards;
  `};

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    height: 140px;
    font-size: 22px;
    margin-bottom: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 120px;
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 120px;
    font-size: 20px;
    margin-bottom: 20px;
  }
`

export const TitleTextContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 343px;
  }
`

export const TitleText = styled.p<{ inView: boolean}>`
  width: 255px;
  font-size: 14px;
  font-weight: 400;
  color: #5A5A5A;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.6s ease-in-out forwards;
  `};
  &:first-child {
    margin-right: 30px;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin: 0 0 15px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 0 15px 0;
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

export const StyledImage = styled.img<{ inView: boolean}>`
  width: 100vw;
  object-fit: cover;
  margin: 0 0 99px 0;
  ${({ inView }) => inView && css`
  animation: ${fadeIn} 0.6s ease-in-out forwards;
  `};
  
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 0 15px 0;
  }

  @media (max-width: 480px) {
    height: 155px;
    margin: 0 0 15px 0;
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

export const StyledItem = styled.div<{ inView: boolean}>`
  width: 255px;
  height: 255px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 47px;
  ${({ inView }) => inView && css`
    animation: ${slideDownAnimation} 0.6s ease-in-out forwards;
  `};
  &:last-child {
    margin-right: 0px;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 368px;
    height: 368px;
    margin: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 234px;
    height: 234px;
    border: 1px solid #B1B1B1;
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 171px;
    height: 171px;
    border: 1px solid #B1B1B1;
    margin: 0;
  }
`

export const ItemText = styled.p`
  width: 167px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #B1B1B1;
  text-transform: uppercase;

  @media (min-width: 769px) and (max-width: 1109px) {
    font-size: 18px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 10px;
  }
`

export const StrongText = styled.p`
  font-size: 80px;
  font-weight: 400;
  color: black;
  text-transform: uppercase;

  @media (min-width: 769px) and (max-width: 1109px) {
    font-size: 70px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 58px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`