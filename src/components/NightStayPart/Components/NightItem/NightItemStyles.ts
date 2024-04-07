import styled, { css } from "styled-components"
import { mobile_screen, slideDown, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles"

export const DataItemContainer = styled.div<{inView: boolean}>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
  ${({ inView }) => inView && css`
    animation: ${slideDown} 0.5s ease-in-out forwards;
  `};
  &:nth-child(odd) {
    margin-right: 30px;
  }

  @media ${tablet_screen} {
    width: 769px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    margin-bottom: 20px;
    &:nth-child(odd) {
      margin: 0 0 20px 0;
    }
  }

  @media ${mobile_screen} {
    width: 343px;
    margin-bottom: 20px;
    &:nth-child(odd) {
      margin: 0 0 20px 0;
    }
  }
`

export const ItemTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 23px;

  @media ${small_tablet_screen} {
    margin-bottom: 15px;
  }

  @media ${mobile_screen} {
    margin-bottom: 15px;
  }
`

export const ItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);

  @media ${small_tablet_screen} {
    width: 470px;
  }

  @media ${mobile_screen} {
    width: 340px;
  }
`