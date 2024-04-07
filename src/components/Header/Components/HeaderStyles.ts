import styled from "styled-components"
import { black_color, gray_color, mobile_screen, second_color, small_tablet_screen, tablet_screen } from "../../../GlobalStyles"

export const StyledHeader = styled.div<{ scrolled: number, windowWidth: number}>`
  width: ${({ scrolled, windowWidth }) => (windowWidth > 959) ? (scrolled > 95 ? '100%' : '1112px') : '100%'};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  z-index: 2;
  border-bottom: 1px solid ${black_color};
  padding-top: 41px;
  padding-bottom: 41px;
  transition: 0.2s;
  &.bigger {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  };

  @media ${tablet_screen} {
    width: 100%;
    padding: 20px 10%;
    border-bottom: 1px solid ${second_color};
  }

  @media ${small_tablet_screen} {
    width: 100%;
    padding: 15px 16px;
    border-bottom: 1px solid ${second_color};
  }

  @media ${mobile_screen} {
    width: 100%;
    padding: 15px 16px;
    border-bottom: 1px solid ${second_color};
  }
`

export const HeaderTitle = styled.button`
  text-transform: uppercase;
  text-align: start;
  width: 157px;
  height: 23px;
  font-size: 24px;
  font-weight: 900;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const NavItem = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 20px;
  transition: 0.3s;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    font-weight: 600;
  }
`

export const MenuButton = styled.button`
  width: 24px;
  height: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${gray_color};
  }
`