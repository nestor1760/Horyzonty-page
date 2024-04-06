import styled, { css, keyframes } from "styled-components";

export const ItemContainer = styled.div<{ element: boolean | undefined, inView: boolean}>`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-top: 1px solid #B1B1B1;
  border-bottom: 1px solid #B1B1B1;
  ${({ inView, element }) => inView && css`
    animation: ${(element ? slideLeft : slideRight)} 0.5s ease-in-out forwards;
  `};

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 343px;
    flex-direction: column;
  }
  `

const slideLeft = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 184px;
  object-fit: contain;
  margin-right: 220px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 468px;
    margin-right: 60px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 468px;
    height: 200px;
    object-fit: cover;
    margin: 0 0 15px 0;
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 140px;
    object-fit: cover;
    margin: 0 0 15px 0;
  }
`

export const InfoBlock = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 769px) {
    width: 343px;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 30px;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 80px;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 80px;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }
`
export const Text = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
    width: 255px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 255px;
  }
`