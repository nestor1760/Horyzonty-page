import { IoCloseSharp } from "react-icons/io5"
import { MenuButton } from "../../components/Header/Components/HeaderStyles"
import { SidebarBody, SidebarHeader, SidebarItem, SidebarMenu, SidebarOverlay, SidebarTitle, Span } from "./SidebarStyles"
import { FaAddressBook, FaPeopleGroup, FaTent } from "react-icons/fa6"
import { GrGallery } from "react-icons/gr"
import { MdContactMail, MdFastfood, MdOutlineTour } from "react-icons/md"
import { SlPresent } from "react-icons/sl"
import { useAppDispatch, useAppSelector } from "../../hook"
import { setSidebar, setToggleSidebar } from "../../store/modalSlice"

const Sidebar = () => {
  const {sidebar} = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()

  const toogleMenu = () => {
    dispatch(setToggleSidebar())
  }

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    dispatch(setSidebar({sidebar: false, scroll: false}))
  };

  return (
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
  )
}

export default Sidebar