import styled, { css } from "styled-components";
import { slideDown, slideLeftAnimation, slideUp } from "../../../../GlobalStyles";

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