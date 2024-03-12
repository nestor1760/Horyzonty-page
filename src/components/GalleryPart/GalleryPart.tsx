import styled, { keyframes } from "styled-components"
import { ItemHeader } from "../../styled-components/ItemHeader"
import { NavigationItem } from "../../styled-components/NavigationItem"
import GalleryItem from "./GalleryItem"
import { useAppDispatch, useAppSelector } from "../../hook"
import { useEffect } from "react"
import { dataGallery } from "../../data/dataGallery"
import { galleryDataRest } from "../../dataAPI/galleryRest"
import GalleryNavItem from "./GalleryNavigation"

const StyledContainer = styled.div`
  width: 1110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 63px 0 46px 0;
`

const slideLeft = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Text = styled.p`
  width: 100%;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
  animation: ${slideLeft} 0.5s ease-in-out forwards;
`
const GridContainer = styled.div`
  position: relative;
  width: 1110px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 28px;
  align-items: end;
`

const GalleryNavigation = styled.div`
  position: absolute;
  top: 0;
  right: 341px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 200px;
`

const ShowAllButton = styled.button`
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

const Loader = styled.div`
  width: 100%;
  font-size: 32px;
  text-align: center;
`

const GalleryPart = () => {
  const dispatch = useAppDispatch()
  const {array, loading} = useAppSelector(state => state.gallery)
  
  useEffect(() => {
      dispatch(galleryDataRest(dataGallery))
  }, [])

  return (
    <StyledContainer>
      <ItemHeader margin="64px 0 80px 0">
        <NavigationItem fontSize="24px">galeria podróży</NavigationItem>
        <Text>Galeria podróży firmy Horyzonty - wiodącego touroperatora specjalizującego się w organizacji wycieczek na najwyższy szczyt Polski, górę Rysy!</Text>
      </ItemHeader>
      {(loading)
        ?
          <Loader>Loading...</Loader>
        :
          <GridContainer>
            <GalleryNavigation>
              {array.map(item => 
                <GalleryNavItem item={item} key={item.id}/>
              )}
              <ShowAllButton>zobaczyć wszystkie</ShowAllButton>
            </GalleryNavigation>
            {array.map((item, index) => 
              <GalleryItem index={index} item={item} key={item.id}/>
            )}
          </GridContainer>
      } 
    </StyledContainer>
  )
}

export default GalleryPart