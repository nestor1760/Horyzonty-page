import styled from 'styled-components'
import { Container } from '../styled-components/Container'
import { FC } from 'react'

const StyledHeader = styled.div`
  width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 41px 0;
`

const StyledHeaderTitle = styled.h3`
  text-transform: uppercase;
  width: 157px;
`

const StyledNavItem = styled.button`
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
  return (
    <Container width='100%'>
      <StyledHeader>
        <StyledHeaderTitle>horyzonty</StyledHeaderTitle>
        <Container width='771px' justify='space-between' align='center'>
          <StyledNavItem>o nas</StyledNavItem>
          <StyledNavItem>galeria</StyledNavItem>
          <StyledNavItem>tury</StyledNavItem>
          <StyledNavItem>przewodnicy</StyledNavItem>
          <StyledNavItem>jedzenie</StyledNavItem>
          <StyledNavItem>nocleg</StyledNavItem>
          <StyledNavItem>karty podarunkowe</StyledNavItem>
          <StyledNavItem>kontakty</StyledNavItem>
        </Container>
      </StyledHeader>
    </Container>
  )
}

export default Header