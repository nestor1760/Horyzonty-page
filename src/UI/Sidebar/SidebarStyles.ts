import styled, { keyframes } from "styled-components"
import { black_color, second_color, white_color } from "../../GlobalStyles"

const openSidebar = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const closeSidebar = keyframes`
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
  background-color: ${white_color};
  border-radius: 15px 0 0 15px;
  animation: ${closeSidebar} 250ms ease-in-out forwards;
  opacity: 0;
  &.active {
    opacity: 1;
    animation: ${openSidebar} 250ms ease-in-out forwards;
  }
`

export const SidebarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  border-bottom: 1px solid ${second_color};
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
  border: 1px solid ${black_color};
  text-transform: uppercase;
  font-weight: 600;
  padding: 0 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: ${black_color};
  transition: 0.3s;
  &:hover {
    color: ${white_color};
    background: #5079A9;
  }
`

export const Span = styled.span`
  margin-left: 10px;
`