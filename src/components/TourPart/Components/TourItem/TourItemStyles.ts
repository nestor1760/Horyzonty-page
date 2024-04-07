import styled, { css } from "styled-components";
import { black_color, mobile_screen, second_color, slideLeftAnimation, slideRightAnimation, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const StyledItemBlock = styled.div<{ element: boolean | undefined, inView: boolean}>`
  width: 100%:
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ element }) => element ? 'row' : 'row-reverse'};
  ${({ inView, element }) => inView && css`
    animation: ${(element ? slideLeftAnimation : slideRightAnimation)} 0.5s ease-in-out forwards;
  `};
  margin-bottom: 80px;
  &:last-child {
    margin-top: 56px;
  }

  @media ${tablet_screen} {
    width: 769px;
    flex-direction: column;
    align-items: center;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    flex-direction: column;
    &:last-child {
      margin-top: 60px;
    }
  }

  @media ${mobile_screen} {
    width: 375px;
    flex-direction: column;
    &:last-child {
      margin-top: 60px;
    }
  }
`

export const InfoPart = styled.div`
  width: 445px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media ${tablet_screen} {
    width: 500px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
  }

  @media ${mobile_screen} {
    width: 343px;
    paddinf: 0 16px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${black_color};
  text-decoration: uppercase;
  margin-bottom: 19px;

  @media ${small_tablet_screen} {
    font-size: 22px;
  }

  @media ${mobile_screen} {
    font-size: 20px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid ${second_color};
  padding: 15px 0;

  @media ${small_tablet_screen} {
    font-size: 15px;
  }

  @media ${mobile_screen} {
    font-size: 14px;
  }
`

export const InfoPartItem = styled.p`
  width: 445px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid ${second_color};
  font-size: 16px
  font-weight: 400;
  color: ${second_color};

  @media ${tablet_screen} {
    width: 500px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    font-size: 16px;
  }

  @media ${mobile_screen} {
    width: 343px;
    font-size: 14px;
  }
`

export const Span = styled.span`
  color: ${black_color};

  @media ${mobile_screen} {
    font-size: 14px;
  }
`

export const Image = styled.img<{ element: boolean | undefined}>`
  width: 800px;
  height: 530px;
  object-fit: cover;
  margin: ${({ element }) => element ? '0 0 0 30px' : '0 30px 0 0'};

  @media ${tablet_screen} {
    width: 500px;
    margin: 50px 0 0 0;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 100%;
    font-size: 16px;
    margin: 50px 0 0 0;
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 100%;
    font-size: 14px;
    margin: 50px 0 0 0;
  }
`