import styled, { css } from "styled-components"
import { black_color, fadeIn, first_color, mobile_screen, second_color, slideDown, slideLeftAnimation, slideRightAnimation, small_tablet_screen, tablet_screen } from "../../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
    padding: 0 16px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    align-items: center;
    padding: 0 16px;
  }

  @media ${mobile_screen} {
    width: 375px;
    align-items: center;
    padding: 0 16px;
  }
`

export const TitleHeader = styled.h1<{ inView: boolean}>`
  font-weight: 400;
  width: 539px;
  height: 186px;
  color: ${black_color};
  margin-bottom: 27px;
  text-transform: uppercase;
  ${({ inView }) => inView && css`
    animation: ${slideRightAnimation} 0.6s ease-in-out forwards;
  `};

  @media ${tablet_screen} {
    width: 500px;
    height: 140px;
    font-size: 22px;
    margin-bottom: 0;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 120px;
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media ${mobile_screen} {
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

  @media ${tablet_screen} {
    width: 500px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
  }

  @media ${mobile_screen} {
    width: 343px;
  }
`

export const TitleText = styled.p<{ inView: boolean}>`
  width: 255px;
  font-size: 14px;
  font-weight: 400;
  color: ${first_color};
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.6s ease-in-out forwards;
  `};
  &:first-child {
    margin-right: 30px;
  }

  @media ${tablet_screen} {
    width: 100%;
  }

  @media ${small_tablet_screen} {
    width: 100%;
    margin: 0 0 15px 0;
  }

  @media ${mobile_screen} {
    width: 100%;
    margin: 0 0 15px 0;
  }
`

export const StyledImage = styled.img<{ inView: boolean}>`
  width: 100vw;
  object-fit: cover;
  margin: 0 0 99px 0;
  ${({ inView }) => inView && css`
  animation: ${fadeIn} 0.6s ease-in-out forwards;
  `};
  
  @media ${small_tablet_screen} {
    margin: 0 0 15px 0;
  }

  @media ${mobile_screen} {
    height: 155px;
    margin: 0 0 15px 0;
  }
`

export const StyledItem = styled.div<{ inView: boolean}>`
  width: 255px;
  height: 255px;
  border: 2px solid ${black_color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 47px;
  ${({ inView }) => inView && css`
    animation: ${slideDown} 0.6s ease-in-out forwards;
  `};
  &:last-child {
    margin-right: 0px;
  }

  @media ${tablet_screen} {
    width: 368px;
    height: 368px;
    margin: 0;
  }

  @media ${small_tablet_screen} {
    width: 234px;
    height: 234px;
    border: 1px solid ${second_color};
    margin: 0;
  }

  @media ${mobile_screen} {
    width: 171px;
    height: 171px;
    border: 1px solid ${second_color};
    margin: 0;
  }
`

export const ItemText = styled.p`
  width: 167px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${second_color};
  text-transform: uppercase;

  @media ${tablet_screen} {
    font-size: 18px;
  }

  @media ${small_tablet_screen} {
    font-size: 12px;
  }

  @media ${mobile_screen} {
    width: 100%;
    font-size: 10px;
  }
`

export const StrongText = styled.p`
  font-size: 80px;
  font-weight: 400;
  color: ${black_color};
  text-transform: uppercase;

  @media ${tablet_screen} {
    font-size: 70px;
  }

  @media ${small_tablet_screen} {
    font-size: 58px;
  }

  @media ${mobile_screen} {
    font-size: 48px;
  }
`