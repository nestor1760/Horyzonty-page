import styled, { css } from "styled-components"
import { mobile_screen, slideLeftAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 1110px;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media ${mobile_screen} {
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`

export const Text = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 22px 0;
  ${({ inView }) => inView && css`
    animation: ${slideLeftAnimation} 0.5s ease-in-out forwards;
  `};

  @media ${tablet_screen} {
    width: 500px;
    font-size: 22px;
    margin-bottom: 21px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    font-size: 22px;
    margin-bottom: 21px;
  }

  @media ${mobile_screen} {
    width: 343px;
    font-size: 20px;
    margin-bottom: 21px;
  }
`

export const TextContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media ${tablet_screen} {
    width: 500px;
    margin-bottom: 30px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    margin-bottom: 30px;
  }

  @media ${mobile_screen} {
    width: 343px;
    margin-bottom: 30px;
  }
`

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  margin-bottom: 25px;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 13px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    flex-direction: column;
    margin-bottom: 13px;
  }

  @media ${mobile_screen} {
    width: 343px;
    flex-direction: column;
    margin-bottom: 13px;
  }
`

export const Button = styled.button`
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-left: 34px;
  }
`