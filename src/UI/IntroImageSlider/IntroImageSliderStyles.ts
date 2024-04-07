import styled from "styled-components"
import { mobile_screen, small_tablet_screen, tablet_screen } from "../../GlobalStyles"

export const StyledSlider = styled.div`
  min-width: 539px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media ${tablet_screen} {
    min-width: 0px;
    width: 100%;
  }

  @media ${small_tablet_screen} {
    min-width: 0px;
    width: 100%;
  }

  @media ${mobile_screen} {
    min-width: 0px;
    width: 100%;
  }
`

export const Image = styled.img`
  min-width: 675px;
  width: 100%;
  height: 406px;
  margin-bottom: 30px;
  object-fit: cover;

  @media ${tablet_screen} {
    width: 737px;
    margin-bottom: 15px;
  }

  @media ${small_tablet_screen} {
    min-width: 0px;
    width: 452px;
    margin-bottom: 0px;
  }

  @media ${mobile_screen} {
    min-width: 0px;
    width: 343px;
    margin-bottom: 0px;
  }
`

export const Button = styled.button`
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  &:last-child {
    margin-left: 34px;
  }
`
export const Count = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`