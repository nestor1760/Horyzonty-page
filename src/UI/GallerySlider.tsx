import styled from "styled-components";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FC, useState } from "react";
import { IGallerySliderProps } from "../types/types";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { setShowGallery } from "../store/modalSlice";
import { useAppDispatch } from "../hook";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

const Image = styled.img`
  min-width: 675px;
  width: 100%;
  height: 406px;
  margin-bottom: 30px;
  object-fit: cover;
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
  const dispatch = useAppDispatch()
  
  const {images} = item 
  
  console.log(item);
  

  const Increment = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const Decrement = () => {
    setCurrentIndex(currentIndex - 1)
  }

  const closeModal = () => {
    dispatch(setShowGallery({showGallery: false, scroll: false}))
  }

  return (
      <StyledContainer>
        <CloseButton onClick={closeModal}><RiCloseCircleLine size={25}/></CloseButton>
        <Image src={`${images[currentIndex].image}`} alt={images[currentIndex].title}/>
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