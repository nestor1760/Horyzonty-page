import styled from "styled-components"
import { black_color, gray_color, mobile_screen, small_tablet_screen } from "../../GlobalStyles"

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
`

export const Counter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  position: relative;
  min-width: 675px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 675px;
  width: 100%;
  height: 406px;
  margin-bottom: 30px;
  object-fit: cover;
  &.biggerPhoto {
    width: 800px;
    height: 500px;
  }

  @media ${small_tablet_screen} {
    width: 500px;
  }

  @media ${mobile_screen} {
    width: 343px;
  }
`

export const ChangeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  margin: 10px 10px 0 0;
  cursor: pointer;
`

export const CloseButton = styled.button`
    align-self: flex-end;
    width: 35px;
    background: transparent;
    border: none;
    color: ${gray_color};
    cursor: pointer;
    z-index: 1;
    margin-bottom: 10px;
    transition: 0.3s;
    &:hover {
      color: ${black_color};
    }
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