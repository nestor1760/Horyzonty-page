import styled from "styled-components";
import { closeGuideInfo, fadeIn, mobile_screen, openGuideInfo, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const SliderItem = styled.div`
  width: 50%;
  height: 600px;
  position: relative;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  @media ${tablet_screen} {
    width: 500px;
    margin-bottom: 13px;
    overflow: hidden;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 470px;
    margin-bottom: 37px;
    overflow: hidden;
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 370px;
    margin-bottom: 37px;
    overflow: hidden;
  }
`

export const Image = styled.img`
  width: 555px;
  height: 600px;
  object-fit: cover;
  z-index: 1;

  @media ${tablet_screen} {
    width: 500px;
    margin-bottom: 13px;
    overflow: hidden;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 470px;
    margin-bottom: 37px;
    overflow: hidden;
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 370px;
    margin-bottom: 37px;
    overflow: hidden;
  }
`

export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 555px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
  opacity: 0;
  animation: ${closeGuideInfo} 0.3s ease-in-out forwards;
  &.active {
    opacity: 1;
    animation: ${openGuideInfo} 0.3s ease-in-out forwards;
  }

  @media ${tablet_screen} {
    width: 500px;
  }

  @media ${small_tablet_screen} {
    width: 450px;
    height: 470px;
  }

  @media ${mobile_screen} {
    width: 343px;
    height: 370px;
  }
`

export const Name = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 41px 0 266px 30px;

  @media ${small_tablet_screen} {
    font-size: 24px;
    margin: 20px 0 224px 20px;
  }

  @media ${mobile_screen} {
    font-size: 20px;
    margin: 20px 0 184px 20px;
  }
`

export const Description = styled.p`
  width: 480px;
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 33px 30px;

  @media ${tablet_screen} {
    width: 460px;
  }

  @media ${small_tablet_screen} {
    width: 420px;
    font-size: 16px;
    margin: 0 0 20px 20px;
  }

  @media ${mobile_screen} {
    width: 314px;
    font-size: 14px;
    margin: 0 0 20px 20px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 28px 30px;

  @media ${small_tablet_screen} {
    font-size: 16px;
    margin: 0 0 20px 20px;
  }

  @media ${mobile_screen} {
    font-size: 14px;
    margin: 0 0 10px 20px;
  }
`