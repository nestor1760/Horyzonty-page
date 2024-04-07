import styled, { css } from "styled-components";
import { mobile_screen, slideLeftAnimation, slideRightAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const ItemContainer = styled.div<{ element: boolean | undefined, inView: boolean}>`
  width: 540px;
  height: ${({ element }) => (element ? '678px' : '')};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;
  ${({ inView, element }) => inView && css`
    animation: ${(element ? slideLeftAnimation : slideRightAnimation)} 0.5s ease-in-out forwards;
  `};

  @media ${tablet_screen} {
    width: 500px;
    height: 410px;
    margin-bottom: 40px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 375px;
    margin-bottom: 40px;
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 284px;
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 540px;
  object-fit: cover;
  margin-bottom: 15px;

  @media ${tablet_screen} {
    width: 500px;
    height: 365px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 340px;
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 260px;
  }
`

export const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

  @media ${small_tablet_screen} {
    font-size: 14px;
  }

  @media ${mobile_screen} {
    font-size: 12px;
  }
`

export const InfoContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${tablet_screen} {
    width: 500px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
  }

  @media ${mobile_screen} {
    width: 343px;
  }
`

export const Button = styled.button`
  font-size: 12px;
  width: 119px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 40px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  box-shadow: 2px 2px 2.6px -1.1px rgba(0,0,0,0.6);
  transition: 0.3s;
  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow:inset 2px 2px 2.6px -1.1px rgba(0,0,0,0.6);
  }
`