import { FC, useState } from "react"
import styled, { keyframes } from "styled-components"
import { IGuideItemProps } from "../../types/types"

const SliderItem = styled.div`
  width: 555px;
  height: 600px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`

const Image = styled.img`
  width: 555px;
  height: 600px;
  object-fit: cover;
  z-index: 1;
`
const InfoContainer = styled.div<{showInfo: boolean | undefined}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 555px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
  transition: opacity 0.5s ease-in-out;
  animation: ${({ showInfo }) => (showInfo ? slideUp : '')} 0.3s ease-in-out forwards;
`

const slideUp = keyframes`
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0);
  }
`;

const Name = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 41px 0 266px 30px;
`

const Description = styled.p`
  width: 480px;
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 33px 30px;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 28px 30px;
`

const GuideItem:FC<IGuideItemProps> = ({guide}) => {
  const {name, description, image, title} = guide
  const [showInfo, setShowInfo] = useState<boolean | undefined>(undefined);

  return (
      <SliderItem
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      >
          <Image 
            src={image}
            
          />
          {showInfo && (
            <InfoContainer showInfo={showInfo}>
              <Name>{name}</Name>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </InfoContainer>)}
      </SliderItem>
  )
}

export default GuideItem