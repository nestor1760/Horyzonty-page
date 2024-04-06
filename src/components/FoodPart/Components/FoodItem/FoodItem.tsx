import { FC } from 'react'
import { useEvenItem } from '../../../../hooks/useEvenItem'
import { Image, InfoBlock, ItemContainer, Text, Title } from './FoodItemStyles'
import { IFoodItemProps } from './interfaces'

const FoodItem:FC<IFoodItemProps> = ({food, index, inView}) => {
  const {description, image, title} = food
  const isEven = useEvenItem(index)  

  return (
    <ItemContainer element={isEven} inView={inView}>
      <Image src={image} alt={title}/>
      <InfoBlock>
        <Title>{title}:</Title>
        <Text>{description}</Text>
      </InfoBlock>
    </ItemContainer>
  )
}

export default FoodItem