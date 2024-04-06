import { FC } from "react"
import { useEvenItem } from "../../../../hooks/useEvenItem"
import { useAppDispatch } from "../../../../hook"
import { setShowGallery } from "../../../../store/modalSlice"
import { Button, Image, InfoContainer, ItemContainer, Name } from "./GalleryItemStyles"
import { IGalleryProps } from "./interfaces"

const GalleryItem:FC<IGalleryProps> = ({item, index, inView, setSelectedIndex}) => {
  const dispatch = useAppDispatch()
  const {date, image, name,} = item
  const isEven = useEvenItem(index)  

  const showModal = (): void => {
    dispatch(setShowGallery({showGallery: true, scroll: true}))
    setSelectedIndex(index)
  } 
  
  return (
      <ItemContainer element={isEven} inView={inView}>
        <Image src={image} alt={name}/>
        <InfoContainer>
          <Name>{name}</Name>
          <Button onClick={showModal}>{date}</Button>
        </InfoContainer>
      </ItemContainer>
  )
}

export default GalleryItem
