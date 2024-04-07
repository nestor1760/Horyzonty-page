import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FC, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { TbArrowsMaximize } from "react-icons/tb";
import { TbArrowsMinimize } from "react-icons/tb";
import { setShowGallery } from "../../store/modalSlice";
import { useAppDispatch } from "../../hook";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { IGallerySliderProps } from "../../components/GalleryPart/Components/GalleryItem/interfaces";
import { Button, ChangeButton, CloseButton, Counter, Image, ImageContainer, StyledContainer } from "./GallerySliderStyles";
import { gray_color, white_color } from "../../GlobalStyles";

const GallerySlider: FC<IGallerySliderProps> = ({item}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [enlarge, setEnlarge] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()
  const {images} = item   

  const Increment = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const Decrement = () => {
    setCurrentIndex(currentIndex - 1)
  }

  const closeModal = () => {
    dispatch(setShowGallery({showGallery: false, scroll: false}))
    setCurrentIndex(0)
    setEnlarge(false)
  }

  const changePhoto = () => {
    setEnlarge(prev => !prev)
  }

  return (
      <StyledContainer>
        <CloseButton onClick={closeModal}><RiCloseCircleLine size={25}/></CloseButton>
        <ImageContainer>
          <Image 
            className={enlarge ? 'biggerPhoto' : ''}
            src={`${images[currentIndex].image}`} 
            alt={images[currentIndex].title}
          />
          <ChangeButton onClick={changePhoto}>
            {(windowWidth > 1109) && (
              enlarge
                ? <TbArrowsMinimize color={white_color} size={35}/>
                : <TbArrowsMaximize color={white_color} size={35}/>
            )}
          </ChangeButton>
        </ImageContainer>
        <Counter>
          {(currentIndex <= 0)
            ? <Button><HiOutlineArrowLongLeft size={35} color={gray_color}/></Button>
            : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={35}/></Button>
          }
          {(currentIndex < images.length - 1)
            ? <Button onClick={Increment}><HiOutlineArrowLongRight size={35}/></Button>
            : <Button><HiOutlineArrowLongRight size={35} color={gray_color}/></Button>
          }
        </Counter>
      </StyledContainer>
  )
}

export default GallerySlider