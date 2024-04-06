import { FC } from "react"
import { DataItemContainer, ItemText, ItemTitle } from "./NightItemStyles"
import { INightStayProps } from "./interfaces"

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