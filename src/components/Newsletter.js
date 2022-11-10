import styled from 'styled-components'
import { FiSend } from 'react-icons/fi'


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1``
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  border: none;
  flex: 6;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Desc>
      <InputContainer>
        <Input placeholder='email' />
        <Button>
          <FiSend style={{ fontSize: 26 }} />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter