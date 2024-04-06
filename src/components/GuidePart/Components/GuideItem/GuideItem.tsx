import { FC, useState } from "react"
import { Description, Image, InfoContainer, Name, SliderItem, Title } from "./GuideItemStyles";
import { IGuideItemProps } from "./interfaces";

const GuideItem:FC<IGuideItemProps> = ({guide}) => {
  const {name, description, image, title} = guide
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
      <SliderItem
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <Image src={image} alt={name}/>
        <InfoContainer className={showInfo ? 'active' : ''}>
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoContainer>)
      </SliderItem>
  )
}

export default GuideItem