import styled, { css } from "styled-components"
import { mobile_screen, slideLeftAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 63px 0 46px 0;
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

export const Text = styled.p<{ inView: boolean}>`
  width: 540px;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
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

export const ItemContainer = styled.div`
  position: relative;
  width: 1110px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 28px;
  align-items: end;

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

export const GalleryNavigation = styled.div`
  position: absolute;
  top: 0;
  right: 341px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 200px;
`

export const Loader = styled.div`
  width: 100%;
  font-size: 32px;
  text-align: center;
`