import styled, { keyframes } from 'styled-components'
import { Container } from '../styled-components/Container'
import { FC, useEffect } from 'react'
import { useScroll } from '../hooks/useScroll'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { IoMenu } from "react-icons/io5"
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { GrGallery } from "react-icons/gr";
import { FaAddressBook } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaTent } from "react-icons/fa6";
import { SlPresent } from "react-icons/sl";
import { MdContactMail } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../hook'
import { setSidebar, setToggleSidebar } from '../store/modalSlice'

const StyledHeader = styled.div<{ scrolled: number, windowWidth: number}>`
  width: ${({ scrolled, windowWidth }) => (windowWidth > 959) ? (scrolled > 95 ? '100%' : '1112px') : '100%'};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  z-index: 2;
  border-bottom: 1px solid black;
  padding-top: 41px;
  padding-bottom: 41px;
  transition: 0.2s;
  &.bigger {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  };

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 100%;
    padding: 20px 10%;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding: 15px 16px;
    border-bottom: 1px solid #B1B1B1;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px 16px;
    border-bottom: 1px solid #B1B1B1;
  }
  `

const HeaderTitle = styled.button`
  text-transform: uppercase;
  text-align: start;
  width: 157px;
  height: 23px;
  font-size: 24px;
  font-weight: 900;
  border: none;
  background: transparent;
  cursor: pointer;
`

const NavItem = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 20px;
  transition: 0.3s;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    font-weight: 600;
  }
`

const MenuButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: gray;
  }
`

const SidebarOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: 0.3s;
  opacity: 0;
  background-color: transparent;
  backdrop-filter: blur(0);
  &.open {
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(3px);
    transition: 0.3s;
  }
`

const slideLeftAnimation = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 300px;
    opacity: 1;
  }
`

const slideRightAnimation = keyframes`
  from {
    width: 300px;
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
`

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 100vh;
  background: white;
  animation: ${slideRightAnimation} 0.3s ease-in-out forwards;
  opacity: 0;
  &.active {
    animation: ${slideLeftAnimation} 0.3s ease-in-out forwards;
    opacity: 1;
  }
`

const SidebarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  border-bottom: 1px solid #B1B1B1;
`

const SidebarMain = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 50px;
  padding-left: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`

const SidebarItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: black;
  transition: 0.3s;
  &:hover {
    color: white;
    background: #5079A9;
  }
`

const Span = styled.span`
  margin-left: 10px;
`

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
      {sidebar && <SidebarOverlay className={sidebar ? 'open' : ''} onClick={() => dispatch(setSidebar({sidebar: false, scroll: false}))}>
                    <SidebarMenu className={sidebar ? 'active' : ''} onClick={e => e.stopPropagation()}>
                      <SidebarHeader>
                        <MenuButton onClick={toogleMenu}>
                          <HiOutlineArrowLongLeft size={28}/>
                        </MenuButton>
                      </SidebarHeader>
                      <SidebarMain>
                        <SidebarItem onClick={() => scrollToPart('about')}><FaAddressBook size={24}/><Span>o nas</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('gallery')}><GrGallery size={24}/><Span>galeria</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('tour')}><MdOutlineTour size={24}/><Span>tury</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('guides')}><FaPeopleGroup size={24}/><Span>przewodnicy</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('food')}><MdFastfood size={24}/><Span>jedzenie</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('nightstay')}><FaTent size={24}/><Span>nocleg</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('vouchers')}><SlPresent size={24}/><Span>karty podarunkowe</Span></SidebarItem>
                        <SidebarItem onClick={() => scrollToPart('contact')}><MdContactMail size={24}/><Span>kontakty</Span></SidebarItem>
                      </SidebarMain>
                    </SidebarMenu>
                  </SidebarOverlay>
      }
    </>
  )
}

export default Header
