import { FC } from "react"
import { IGalleryProps } from "../../types/types"
import styled, { keyframes } from "styled-components"
import { useEvenItem } from "../../hooks/useEvenItem"

const ItemConteiner = styled.div<{ element: boolean | undefined}>`
  width: 540px;
  height: ${({ element }) => (element ? '678px' : '')};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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
  width: 540px;
  object-fit: cover;
  margin-bottom: 15px;
`

const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`

const InfoContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
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

const GalleryItem:FC<IGalleryProps> = ({item, index}) => {
  const {date, image, name} = item
  const isEven = useEvenItem(index)    

  return (
    <ItemConteiner element={isEven}>
      <Image src={image} alt={name}/>
      <InfoContainer>
        <Name>{name}</Name>
        <Button>{date}</Button>
      </InfoContainer>
    </ItemConteiner>
  )
}

export default GalleryItem