import styled from "styled-components";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FC, useState } from "react";
import { IGallerySliderProps } from "../types/types";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { TbArrowsMaximize } from "react-icons/tb";
import { TbArrowsMinimize } from "react-icons/tb";
import { setShowGallery } from "../store/modalSlice";
import { useAppDispatch } from "../hook";
import { useWindowWidth } from "../hooks/useWindowWidth";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
`

const Counter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  position: relative;
  min-width: 675px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 675px;
  width: 100%;
  height: 406px;
  margin-bottom: 30px;
  object-fit: cover;
  &.biggerPhoto {
    width: 800px;
    height: 500px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 343px;
  }
`

const ChangeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  margin: 10px 10px 0 0;
  cursor: pointer;
`

const CloseButton = styled.button`
    align-self: flex-end;
    width: 35px;
    background: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    z-index: 1;
    margin-bottom: 10px;
    transition: 0.3s;
    &:hover {
      color: black;
    }
  }
`

const Button = styled.button`
  width: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  &:last-child {
    margin-left: 34px;
  }
`
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
                ? <TbArrowsMinimize color="white" size={35}/>
                : <TbArrowsMaximize color="white" size={35}/>
            )}
          </ChangeButton>
        </ImageContainer>

        <Counter>
          {(currentIndex <= 0)
            ? <Button><HiOutlineArrowLongLeft size={35} color="gray"/></Button>
            : <Button onClick={Decrement}><HiOutlineArrowLongLeft size={35}/></Button>
          }
          {(currentIndex < images.length - 1)
            ? <Button onClick={Increment}><HiOutlineArrowLongRight size={35}/></Button>
            : <Button><HiOutlineArrowLongRight size={35} color="gray"/></Button>
          }
        </Counter>
      </StyledContainer>
  )
}

export default GallerySlider