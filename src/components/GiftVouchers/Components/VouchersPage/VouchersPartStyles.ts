import styled, { css } from "styled-components"
import { mobile_screen, slideLeftAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    align-items: center;
    padding: 0 16px;
  }

  @media ${mobile_screen} {
    width: 375px;
    padding: 0 16px;
    align-items: center;
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

export const VoucherList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 58px;

  @media ${tablet_screen} {
    width: 769px;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    padding: 0 16px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
  }

  @media ${mobile_screen} {
    width: 375px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
  }
`