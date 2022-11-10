import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopButton = styled.div`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`
const TopTexts = styled.div`
  
`
const TopText = styled.div`

`
const Button = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton>Checkout</TopButton>
        </Top>
        <Button></Button>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart