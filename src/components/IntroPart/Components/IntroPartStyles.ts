import styled, { css } from "styled-components"
import { mobile_screen, second_color, slideDown, slideRightAnimation, small_tablet_screen, tablet_screen, third_color } from "../../../GlobalStyles"

export const StyledIntro = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 105px;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
    padding: 0 16px 40px 16px;
    margin-top: 56px;
    border-bottom: 1px solid ${second_color};
  }

  @media ${small_tablet_screen} {
    width: 500px;
    align-items: center;
    padding: 0 16px;
    margin-top: 56px;
    border-bottom: 1px solid ${second_color};
  }

  @media ${mobile_screen} {
    width: 375px;
    align-items: center;
    margin-top: 56px;
    padding: 0 16px;
    border-bottom: 1px solid ${second_color};
  }
`

export const Title = styled.p<{ inView: boolean}>`
  width: 826px;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 65px 0 41px 0;
  ${({ inView }) => inView && css`
    animation: ${slideDown} 0.5s ease-in-out forwards;
  `};

  @media ${tablet_screen} {
    font-size: 32px;
    margin: 24px 0 30px 0;
    width: 100%;
  }

  @media ${small_tablet_screen} {
    font-size: 30px;
    width: 100%;
    margin: 24px 0 30px 0;
  }

  @media ${mobile_screen} {
    font-size: 28px;
    width: 100%;
    margin: 24px 0 30px 0;
  }
`

export const Text = styled.p<{ inView: boolean}>`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  color: ${third_color};
  margin: 61px 0 54px 0;
  text-align: start;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.5s ease-in-out forwards;
  `};

  @media ${tablet_screen} {
    margin: 47px 0 64px 0;
    width: 100%;
  }

  @media ${small_tablet_screen} {
    width: 100%;
    margin: 47px 0 64px 0;
  }

  @media ${mobile_screen} {
    width: 100%;
    margin: 47px 0 64px 0;
  }
`