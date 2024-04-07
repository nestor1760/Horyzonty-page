import styled, { css } from "styled-components";
import { mobile_screen, second_color, slideLeftAnimation, slideRightAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const ItemContainer = styled.div<{ element: boolean | undefined, inView: boolean}>`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-top: 1px solid ${second_color};
  border-bottom: 1px solid ${second_color};
  ${({ inView, element }) => inView && css`
    animation: ${(element ? slideLeftAnimation : slideRightAnimation)} 0.5s ease-in-out forwards;
  `};

  @media ${small_tablet_screen} {
    flex-direction: column;
  }

  @media ${mobile_screen} {
    width: 343px;
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 350px;
  height: 184px;
  object-fit: contain;
  margin-right: 220px;

  @media ${tablet_screen} {
    width: 468px;
    margin-right: 60px;
  }

  @media ${small_tablet_screen} {
    width: 468px;
    height: 200px;
    object-fit: cover;
    margin: 0 0 15px 0;
  }

  @media ${mobile_screen} {
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

  @media ${small_tablet_screen} {
    width: 80px;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  @media ${mobile_screen} {
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

  @media ${small_tablet_screen} {
    font-size: 14px;
    width: 255px;
  }

  @media ${mobile_screen} {
    font-size: 14px;
    width: 255px;
  }
`