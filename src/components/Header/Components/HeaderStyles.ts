import styled, { keyframes } from "styled-components"

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
  border-bottom: 1px solid black;
  padding-top: 41px;
  padding-bottom: 41px;
  transition: 0.2s;
  &.bigger {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  };

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 100%;
    padding: 20px 10%;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding: 15px 16px;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px 16px;
    border-bottom: 1px solid #B1B1B1;
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
    color: gray;
  }
`

const openAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

export const SidebarOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 250ms;
  opacity: 0;
  background-color: transparent;
  backdrop-filter: blur(0);
  &.open {
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(3px);
  }
`

export const SidebarMenu = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 15px 0 0 15px;
  animation: ${closeAnimation} 250ms ease-in-out forwards;
  opacity: 0;
  &.active {
    opacity: 1;
    animation: ${openAnimation} 250ms ease-in-out forwards;
  }
`

export const SidebarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  border-bottom: 1px solid #B1B1B1;
`

export const SidebarTitle = styled.p`
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  margin-left: 20px;
`

export const SidebarBody = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 50px;
  padding-left: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`

export const SidebarItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: black;
  transition: 0.3s;
  &:hover {
    color: white;
    background: #5079A9;
  }
`

export const Span = styled.span`
  margin-left: 10px;
`