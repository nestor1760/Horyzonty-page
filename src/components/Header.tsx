import styled from 'styled-components'
import { Container } from '../styled-components/Container'
import { FC } from 'react'
import { useScroll } from '../hooks/useScroll'

const StyledHeader = styled.div<{ scrolled: number}>`
  width: ${({ scrolled }) => scrolled > 95 ? '100%' : '1112px'};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  z-index: 1000;
  border-bottom: 1px solid black;
  padding-top: 41px;
  padding-bottom: 41px;
  transition: 0.2s;
  &.bigger {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  };
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


const Header: FC = () => {
  const scroll = useScroll()

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  };

  const scrollToStart = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  
  return (
    <Container width='100%' background='rgba(255, 255, 255, 0.9)'>
      <StyledHeader scrolled={scroll} className={(scroll > 95) ? 'bigger' : 'default'}>
        <HeaderTitle onClick={() => scrollToStart()}>horyzonty</HeaderTitle>
        <Container width='771px' justify='space-between' align='flex-end' margin='0'>
          <NavItem onClick={() => scrollToPart('about')}>o nas</NavItem>
          <NavItem onClick={() => scrollToPart('gallery')}>galeria</NavItem>
          <NavItem onClick={() => scrollToPart('tour')}>tury</NavItem>
          <NavItem onClick={() => scrollToPart('guides')}>przewodnicy</NavItem>
          <NavItem onClick={() => scrollToPart('food')}>jedzenie</NavItem>
          <NavItem onClick={() => scrollToPart('nightstay')}>nocleg</NavItem>
          <NavItem onClick={() => scrollToPart('vouchers')}>karty podarunkowe</NavItem>
          <NavItem onClick={() => scrollToPart('contact')}>kontakty</NavItem>
        </Container>
      </StyledHeader>
    </Container>
  )
}

export default Header