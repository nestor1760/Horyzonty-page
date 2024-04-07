import styled, { css } from "styled-components";
import { mobile_screen, slideRightAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const StyledFoodContainer = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    padding: 0 16px;
    align-items: center;
  }

  @media ${mobile_screen} {
    width: 375px;
    padding: 0 16px;
    align-items: center;
  }
`

export const Text = styled.p<{ inView: boolean}>`
  max-width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.5s ease-in-out forwards;
  `};

  @media ${small_tablet_screen} {
    width: 450px;
    height: 100%;
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media ${mobile_screen} {
    width: 343px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`

export const FoodList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`