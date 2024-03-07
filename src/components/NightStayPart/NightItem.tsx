import { FC } from "react"
import styled, { keyframes } from "styled-components"
import { INightStayProps } from "../../types/types"


const slideDown = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const DataItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
  animation: ${slideDown} 0.5s ease-in-out forwards;
  &:nth-child(odd) {
    margin-right: 30px
  }
`

const ItemTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 23px;
`

const ItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6)
`

const NightItem:FC<INightStayProps> = ({item}) => {
  const {title, description} = item

  return (
    <DataItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{description}</ItemText>
    </DataItemContainer>
  )
}

export default NightItem