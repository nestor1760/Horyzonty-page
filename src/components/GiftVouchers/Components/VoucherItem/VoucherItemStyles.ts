import styled, { css, keyframes } from "styled-components";

export const VoucherItemContainer = styled.div<{ element: boolean | undefined, inView: boolean, windowWidth: number}>`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  ${({ inView, element, windowWidth }) => inView && css`
    animation: ${(windowWidth < 1109 ? slideLeftAnimation : element ? slideUp : slideDown)} 0.5s ease-in-out forwards;
  `};

  @media (max-width: 1109px) {
    margin-bottom: 40px;
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

const slideUp = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Description = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Title = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  text-transform: upper-case;
  margin: 30px 0 20px 0;
`