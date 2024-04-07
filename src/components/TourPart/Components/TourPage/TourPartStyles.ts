import styled from "styled-components"
import { mobile_screen, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;

  @media ${tablet_screen} {
    width: 769px;
    padding: 0 16px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
    padding: 0 16px;
  }

  @media ${mobile_screen} {
    width: 375px;
    padding: 0 16px;
  }
`

export const TourListBlock = styled.div`
  width: 1110px;

  @media ${tablet_screen} {
    width: 769px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
  }

  @media ${mobile_screen} {
    width: 375px;
  }
`