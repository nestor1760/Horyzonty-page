import styled, { css, keyframes } from "styled-components";

export const StyledItemBlock = styled.div<{ element: boolean | undefined, inView: boolean}>`
  width: 100%:
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ element }) => element ? 'row' : 'row-reverse'};
  ${({ inView, element }) => inView && css`
    animation: ${(element ? slideLeftAnimation : slideRightAnimation)} 0.5s ease-in-out forwards;
  `};
  margin-bottom: 80px;
  &:last-child {
    margin-top: 56px;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    flex-direction: column;
    &:last-child {
      margin-top: 60px;
    }
  }

  @media (max-width: 480px) {
    width: 375px;
    flex-direction: column;
    &:last-child {
      margin-top: 60px;
    }
  }
`

const slideLeftAnimation = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideRightAnimation = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const InfoPart = styled.div`
  width: 445px;
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
    paddinf: 0 16px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: black;
  text-decoration: uppercase;
  margin-bottom: 19px;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid #B1B1B1;
  padding: 15px 0;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const InfoPartItem = styled.p`
  width: 445px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #B1B1B1;
  font-size: 16px
  font-weight: 400;
  color: #B1B1B1;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 343px;
    font-size: 14px;
  }
`

export const Span = styled.span`
  color: black;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const Image = styled.img<{ element: boolean | undefined}>`
  width: 800px;
  height: 530px;
  object-fit: cover;
  margin: ${({ element }) => element ? '0 0 0 30px' : '0 30px 0 0'};

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 500px;
    margin: 50px 0 0 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 100%;
    font-size: 16px;
    margin: 50px 0 0 0;
  }

  @media (max-width: 480px) {
    width: 343px;
    height: 100%;
    font-size: 14px;
    margin: 50px 0 0 0;
  }
`