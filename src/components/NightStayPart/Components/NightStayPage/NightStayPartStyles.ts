import styled, { css } from "styled-components"
import { TImage } from "./interfaces"
import { fadeIn, mobile_screen, slideLeftAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 126px 0;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
    margin: 0;
  }

  @media ${small_tablet_screen} {
    align-items: center;
    width: 500px;
    padding: 0 16px;
    margin: 0;
  }

  @media ${mobile_screen} {
    align-items: center;
    width: 375px;
    padding: 0 16px;
    margin: 0;
  }
`

export const Text = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media ${small_tablet_screen} {
    width: 500px;
    font-size: 24px;
  }

  @media ${mobile_screen} {
    width: 343px;
    font-size: 20px;
  }
`

export const Image = styled.img<TImage>`
  display: inline-block;
  min-width: 705px; 
  width: 100%;
  height: 425px;
  object-fit: cover; 
  position: absolute;
  ${({ inView }) => inView && css`
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  `};
  margin: ${props => props.margin || ''};
  top: ${props => props.top || ''};
  right: ${props => props.right || ''};
  bottom: ${props => props.bottom || ''};
  left: ${props => props.left || ''};

  @media ${tablet_screen} {
    width: 100%;
    min-width: 705px;
  }

  @media ${small_tablet_screen} { 
    min-width: 481px;
    left: 0;
  }

  @media ${mobile_screen} {
    min-width: 375px;
    left: -17px;
  }
`

export const ItemContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media ${tablet_screen} {
    width: 769px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px 0 0 0;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px 0 0 0;
  }

  @media ${mobile_screen} {
    width: 343px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px 0 0 0;
  }
`

export const StyledItem = styled.div`
  width: 50%;
  height: 734px;
  display: flex;
  align-item: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  &.reverseItem {
    flex-direction: column-reverse;
  }
  &:first-child {
    justify-content: flex-end;
    margin-right: 30px;
  }

  @media ${tablet_screen} {
    width: 769px;
    &:first-child {
      justify-content: flex-end;
      margin-right: 0;
    }
  }

  @media ${small_tablet_screen} {
    width: 500px;
    height: 780px;
    padding: 0 16px;
    &:first-child {
      justify-content: flex-end;
      margin-right: 0;
    }
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 780px;
    &:first-child {
      justify-content: flex-end;
      margin-right: 0;
    }
  }
`

export const Title = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 35px;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media ${tablet_screen} {
    width: 500px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  @media ${mobile_screen} {
    width: 343px;
    margin: 0 0 20px 0;
    font-size: 20px;
  }
`