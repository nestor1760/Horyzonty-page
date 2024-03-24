import { FC } from "react"
import styled, { css, keyframes } from "styled-components"
import { INightStayProps } from "../../types/types"


const slideDownAnimation = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const DataItemContainer = styled.div<{inView: boolean}>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
  ${({ inView }) => inView && css`
    animation: ${slideDownAnimation} 0.5s ease-in-out forwards;
  `};
  &:nth-child(odd) {
    margin-right: 30px;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    margin-bottom: 20px;
    &:nth-child(odd) {
      margin: 0 0 20px 0;
    }
  }

  @media (max-width: 480px) {
    width: 343px;
    margin-bottom: 20px;
    &:nth-child(odd) {
      margin: 0 0 20px 0;
    }
  }
`

const ItemTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 23px;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`

const ItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 481px) and (max-width: 768px) {
    width: 470px;
  }

  @media (max-width: 480px) {
    width: 340px;
  }
`

const NightItem:FC<INightStayProps> = ({item, inView}) => {
  const {title, description} = item

  return (
    <DataItemContainer inView={inView}>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{description}</ItemText>
    </DataItemContainer>
  )
}

export default NightItem