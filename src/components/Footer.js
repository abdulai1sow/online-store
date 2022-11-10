import styled from 'styled-components'
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp, BsFillPinMapFill, BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'



const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px ;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`

`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SOW.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quas excepturi at tempore accusamus quod numquam eius quae magnam harum quam sapiente! Magni reprehenderit nam soluta animi, non sunt nobis?
        </Desc>
        <SocialContainer>

          <SocialIcon color='e4405f'>
            <BsInstagram />
          </SocialIcon>

          <SocialIcon color='3b5999'>
            <BsFacebook />
          </SocialIcon>

          <SocialIcon color='4649FF'>
            <BsTwitter />
          </SocialIcon>

          <SocialIcon color='82CD47'>
            <BsWhatsapp />
          </SocialIcon>

        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>

        <Title>Contact</Title>
        <ContactItem> <BsFillPinMapFill style={{ marginRight: '10px' }} /> 5563 Trinity Ave SW, Atlanta, GA 30303

        </ContactItem>

        <ContactItem>
          <BsFillTelephoneFill style={{ marginRight: '10px' }} /> 404 394 3423
        </ContactItem>

        <ContactItem>
          <AiOutlineMail style={{ marginRight: '10px' }} /> abdulai@gmail.com
        </ContactItem>

        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />


      </Right>
    </Container>
  )
}

export default Footer