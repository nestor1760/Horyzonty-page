import styled, { keyframes, css } from 'styled-components'
import { Container } from '../styled-components/Container'
import { FC, useEffect, useState } from 'react'

const StyledHeader = styled.div<{scrolled: boolean}>`
  width: ${({ scrolled }) => scrolled ? '100%' : '1112px'};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  z-index: 1000;
  justify-content: space-between;
  border-bottom: 1px solid black;
  animation: ${({ scrolled }) => scrolled ? css`${maxWidth} 0.3s forwards` : css`${defaultWidth} 0.3s forwards`};
`

const maxWidth = keyframes`
  from {
    width: 1112px;
    padding: 41px 0;
  }
  to {
    width: 100%;
    padding: 41px 10%;
  }
`

const defaultWidth = keyframes`
  from {
    width: 100%;
    padding: 41px 10%;
  }
  to {
    width: 1112px;
    padding: 41px 0;
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

const NavItem = styled.button`
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
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled: boolean = window.scrollY > 95;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container width='100%' background='rgba(255, 255, 255, 0.9)'>
      <StyledHeader scrolled={scrolled}>
        <HeaderTitle>horyzonty</HeaderTitle>
        <Container width='771px' justify='space-between' align='center'>
          <NavItem>o nas</NavItem>
          <NavItem>galeria</NavItem>
          <NavItem>tury</NavItem>
          <NavItem>przewodnicy</NavItem>
          <NavItem>jedzenie</NavItem>
          <NavItem>nocleg</NavItem>
          <NavItem>karty podarunkowe</NavItem>
          <NavItem>kontakty</NavItem>
        </Container>
      </StyledHeader>
    </Container>
  )
}

export default Header