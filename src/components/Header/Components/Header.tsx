import { Container } from '../../../styled-components/Container'
import { FC, useEffect } from 'react'
import { useScroll } from '../../../hooks/useScroll'
import { useWindowWidth } from '../../../hooks/useWindowWidth'
import { IoMenu } from "react-icons/io5"
import { GrGallery } from "react-icons/gr"
import { FaAddressBook } from "react-icons/fa"
import { MdOutlineTour } from "react-icons/md"
import { FaPeopleGroup } from "react-icons/fa6"
import { MdFastfood } from "react-icons/md"
import { FaTent } from "react-icons/fa6"
import { SlPresent } from "react-icons/sl"
import { MdContactMail } from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from '../../../hook'
import { setSidebar, setToggleSidebar } from '../../../store/modalSlice'
import { HeaderTitle, MenuButton, NavItem, SidebarBody, SidebarHeader, SidebarItem, SidebarMenu, SidebarOverlay, SidebarTitle, Span, StyledHeader } from './HeaderStyles'

const Header: FC = () => {
  const {sidebar} = useAppSelector(state => state.modal)
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
      <SidebarOverlay 
          className={sidebar ? 'open' : ''} 
          onClick={() => dispatch(setSidebar({sidebar: false, scroll: false}))}
        >
          <SidebarMenu 
            className={sidebar ? 'active' : ''} 
            onClick={e => e.stopPropagation()} 
          >
            <SidebarHeader>
              <MenuButton onClick={toogleMenu}>
                <IoCloseSharp size={28}/>
              </MenuButton>
              <SidebarTitle>Horyzonty</SidebarTitle>
            </SidebarHeader>
            <SidebarBody>
              <SidebarItem onClick={() => scrollToPart('about')}><FaAddressBook size={24}/><Span>o nas</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('gallery')}><GrGallery size={24}/><Span>galeria</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('tour')}><MdOutlineTour size={24}/><Span>tury</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('guides')}><FaPeopleGroup size={24}/><Span>przewodnicy</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('food')}><MdFastfood size={24}/><Span>jedzenie</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('nightstay')}><FaTent size={24}/><Span>nocleg</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('vouchers')}><SlPresent size={24}/><Span>karty podarunkowe</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('contact')}><MdContactMail size={24}/><Span>kontakty</Span></SidebarItem>
            </SidebarBody>
          </SidebarMenu>
      </SidebarOverlay>
    </>
  )
}

export default Header
