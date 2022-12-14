import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch, BsHeart } from 'react-icons/bs'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbf4;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;

`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: gray;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart/>
        </Icon>
        <Icon>
          <BsSearch />
        </Icon>
        <Icon>
          <BsHeart />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product