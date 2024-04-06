import { ItemHeader } from "../../../../styled-components/ItemHeader"
import { NavigationItem } from "../../../../styled-components/NavigationItem"
import GalleryItem from "../GalleryItem/GalleryItem"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { useEffect, useState } from "react"
import { dataGallery } from "../../../../data/dataGallery"
import { galleryDataRest } from "../../../../dataAPI/galleryRest"
import GalleryNavItem from "../GalleryNavigation/GalleryNavigation"
import { useInView } from "react-intersection-observer"
import Modal from "../../../../UI/Modal"
import GallerySlider from "../../../../UI/GallerySlider"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { GalleryNavigation, ItemContainer, Loader, StyledContainer, Text } from "./GalleryPageStyles"
import { IGalleryPartProps } from "./interfaces"

const GalleryPart = ({ id }: IGalleryPartProps) => {
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()
  const {array, loading} = useAppSelector(state => state.gallery)
  const {ref: galleryRef, inView: galleryIsVisible} = useInView()
  const {showGallery} = useAppSelector(state => state.modal)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
      dispatch(galleryDataRest(dataGallery))
  }, [])  

  return (
    <>
      <StyledContainer ref={galleryRef}>
        <ItemHeader margin="64px 0 80px 0">
          <NavigationItem width="263px" fontSize="24px" id={id}>galeria podróży</NavigationItem>
          <Text inView={galleryIsVisible}>Galeria podróży firmy Horyzonty - wiodącego touroperatora specjalizującego się w organizacji wycieczek na najwyższy szczyt Polski, górę Rysy!</Text>
        </ItemHeader>
        {(loading)
          ?
            <Loader>Loading...</Loader>
          :
            <ItemContainer>
              {(windowWidth > 1109) && (
                <GalleryNavigation>
                  {array.map((item, index) => 
                    <GalleryNavItem item={item} key={item.id} setSelectedIndex={setSelectedIndex} index={index}/>
                  )}
                </GalleryNavigation>)
              }
              {array.map((item, index) => 
                <GalleryItem index={index} item={item} key={item.id} inView={galleryIsVisible} setSelectedIndex={setSelectedIndex}/>
              )}
            </ItemContainer>
        } 
      </StyledContainer>
      <Modal show={showGallery}>
        {(array.length > 0) && <GallerySlider item={array[selectedIndex]}/>}
      </Modal>
    </>
  )
}

export default GalleryPart
