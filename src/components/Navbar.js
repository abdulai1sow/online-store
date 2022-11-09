import React from 'react' 
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Container = styled.div`
  height: 90px;
`
const Wrapper = styled.div`
  padding: 10px 20px;  
  display: flex; 
  align-items: center;
  justify-content: space-between
`
const SearchContainer = styled.div`
border: .5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
width: 160px;
`
const Input = styled.input`
  border: none;
`
const Left = styled.div`
  flex: 1;
`
const Center = styled.div`
   flex: 1;
   text-align: center;
 `
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Logo = styled.h1`
  font-weight: bold; 
` 
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/> 
            <BsSearch style={{ color: 'gray', fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            SOW.
          </Logo>
        </Center>
        <Right>
          <MenuItem>RIGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <AiOutlineShoppingCart style={{ fontSize: 22 }} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar