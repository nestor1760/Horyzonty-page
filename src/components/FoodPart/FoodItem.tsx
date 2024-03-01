import { FC } from 'react'
import { IFoodItemProps } from '../../types/types'
import styled, { keyframes } from 'styled-components'
import { useEvenItem } from '../../hooks/useEvenItem'

const ItemContainer = styled.div<{ element: boolean | undefined}>`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-top: 1px solid #B1B1B1;
  border-bottom: 1px solid #B1B1B1;
  animation: ${({ element }) => (element ? slideLeft : slideRight)} 0.5s ease-in-out forwards;
`
const slideLeft = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 184px;
  object-fit: contain;
  margin-right: 220px;
`

const InfoBlock = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 30px;
`
const Text = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`

const FoodItem:FC<IFoodItemProps> = ({food, index}) => {
  const {description, image, title} = food
  const isEven = useEvenItem(index)  

  return (
    <ItemContainer element={isEven}>
      <Image src={image} alt={title}/>
      <InfoBlock>
        <Title>{title}:</Title>
        <Text>{description}</Text>
      </InfoBlock>
    </ItemContainer>
  )
}

export default FoodItem