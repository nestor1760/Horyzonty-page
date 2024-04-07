import { Container } from '../../../styled-components/Container'
import { FC, useEffect } from 'react'
import { useScroll } from '../../../hooks/useScroll'
import { useWindowWidth } from '../../../hooks/useWindowWidth'
import { IoMenu } from "react-icons/io5"
import { useAppDispatch } from '../../../hook'
import { setSidebar, setToggleSidebar } from '../../../store/modalSlice'
import { HeaderTitle, MenuButton, NavItem, StyledHeader } from './HeaderStyles'
import Sidebar from '../../../UI/Sidebar/Sidebar'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const {windowWidth} = useWindowWidth()
  const scrollPosition = useScroll()

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    dispatch(setSidebar({sidebar: false, scroll: false}))
  };

  const scrollToStart = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(setSidebar({sidebar: false, scroll: false}))
  }

  const toogleMenu = () => {
    dispatch(setToggleSidebar())
  }

  useEffect(() => {
    if(windowWidth > 977) {
      dispatch(setSidebar({sidebar: false, scroll: false}))
    }
  }, [windowWidth])
    
  return (
    <>
      <StyledHeader 
        windowWidth={windowWidth} 
        scrolled={scrollPosition} 
        className={(windowWidth > 977) ? (scrollPosition > 95) ? 'bigger' : '' : ''}
      >
        <HeaderTitle onClick={() => scrollToStart()}>horyzonty</HeaderTitle>
        {(windowWidth > 977)
          ? <Container width='771px' justify='space-between' align='flex-end' margin='0'>
              <NavItem onClick={() => scrollToPart('about')}>o nas</NavItem>
              <NavItem onClick={() => scrollToPart('gallery')}>galeria</NavItem>
              <NavItem onClick={() => scrollToPart('tour')}>tury</NavItem>
              <NavItem onClick={() => scrollToPart('guides')}>przewodnicy</NavItem>
              <NavItem onClick={() => scrollToPart('food')}>jedzenie</NavItem>
              <NavItem onClick={() => scrollToPart('nightstay')}>nocleg</NavItem>
              <NavItem onClick={() => scrollToPart('vouchers')}>karty podarunkowe</NavItem>
              <NavItem onClick={() => scrollToPart('contact')}>kontakty</NavItem>
            </Container>
          : <MenuButton onClick={toogleMenu}>
              <IoMenu size={24}/>
            </MenuButton>
        }
      </StyledHeader>
      <Sidebar />
    </>
  )
}

export default Header
