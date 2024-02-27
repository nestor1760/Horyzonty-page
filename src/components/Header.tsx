import styled, { keyframes, css } from 'styled-components'
import { Container } from '../styled-components/Container'
import { FC } from 'react'
import { useScroll } from '../hooks/useScroll'

const StyledHeader = styled.div<{ scrolled: number}>`
  width: 1112px;
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
  padding-top: 41px;
  padding-bottom: 41px;
  animation: ${({ scrolled }) => scrolled > 95 ? css`${maxWidth} 0.3s forwards` : css`${defaultWidth} 0.3s forwards`};
  `
  // animation: ${({ scrolled }) => scrolled ? css`${maxWidth} 0.3s forwards` : css`${defaultWidth} 0.3s forwards`};

const maxWidth = keyframes`
  from {
    width: 1112px;
    padding-left: 0px;
    padding-right: 0px;
  }
  to {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
`

const defaultWidth = keyframes`
  from {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
  to {
    width: 1112px;
    padding-left: 0px;
    padding-right: 0px;
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
  // const [scrolled, setScrolled] = useState<boolean | null>(null)
  const scroll = useScroll()
  
  
  // useEffect(() => {
  //     const handleScroll = () => {
  //     (window.scrollY > 95) ? setScrolled(true) : setScrolled(false);  
  //     };
    
  //     window.addEventListener('scroll', handleScroll);
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  return (
    <Container width='100%' background='rgba(255, 255, 255, 0.9)'>
      <StyledHeader scrolled={scroll}>
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