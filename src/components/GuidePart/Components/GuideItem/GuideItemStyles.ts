import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const SliderItem = styled.div`
  width: 50%;
  height: 600px;
  position: relative;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    margin-bottom: 13px;
    overflow: hidden;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 470px;
    margin-bottom: 37px;
    overflow: hidden;
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 370px;
    margin-bottom: 37px;
    overflow: hidden;
  }
`

export const Image = styled.img`
  width: 555px;
  height: 600px;
  object-fit: cover;
  z-index: 1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    margin-bottom: 13px;
    overflow: hidden;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 470px;
    margin-bottom: 37px;
    overflow: hidden;
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 370px;
    margin-bottom: 37px;
    overflow: hidden;
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`

export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 555px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
  opacity: 0;
  animation: ${slideDown} 250ms ease-in-out forwards;
  &.active {
    opacity: 1;
    animation: ${slideUp} 250ms ease-in-out forwards;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 470px;
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 370px;
  }
`

export const Name = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 41px 0 266px 30px;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
    margin: 20px 0 224px 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin: 20px 0 184px 20px;
  }
`

export const Description = styled.p`
  width: 480px;
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 33px 30px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 460px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 420px;
    font-size: 16px;
    margin: 0 0 20px 20px;
  }

  @media (max-width: 480px) {
    width: 314px;
    font-size: 14px;
    margin: 0 0 20px 20px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 28px 30px;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 20px 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 0 10px 20px;
  }
`