import { FC } from 'react'
import { IGalleryNavProps } from '../../types/types'
import styled from 'styled-components'
import { setShowGallery } from '../../store/modalSlice'
import { useAppDispatch } from '../../hook'

const ButtonNavigation = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;
  align-text: start;
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-weight: 600;
    text-decoration: underline;
    color: black;
  }
`

const GalleryNavItem:FC<IGalleryNavProps> = ({item, setSelectedIndex, index}) => {
  const dispatch = useAppDispatch()
  const {date} = item

  const showModal = (): void => {
    dispatch(setShowGallery({showGallery: true, scroll: true}))
    setSelectedIndex(index)
  } 

  return (
    <div>
      <ButtonNavigation onClick={showModal}>{date}</ButtonNavigation>
    </div>
  )
}

export default GalleryNavItem