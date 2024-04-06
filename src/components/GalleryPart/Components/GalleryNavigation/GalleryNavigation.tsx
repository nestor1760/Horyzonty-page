import { FC } from 'react'
import { setShowGallery } from '../../../../store/modalSlice'
import { useAppDispatch } from '../../../../hook'
import { ButtonNavigation } from './GalleryNavigationStyles'
import { IGalleryNavProps } from './interfaces'

const GalleryNavItem:FC<IGalleryNavProps> = ({item, setSelectedIndex, index}) => {
  const dispatch = useAppDispatch()
  const {date} = item

  const showModal = (): void => {
    dispatch(setShowGallery({showGallery: true, scroll: true}))
    setSelectedIndex(index)
  } 

  return <ButtonNavigation onClick={showModal}>{date}</ButtonNavigation>
}

export default GalleryNavItem