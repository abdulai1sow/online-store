import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #F5F1DA;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.form`
  font-size: 24px;
  font-weight: 300
`;
const Form = styled.h1`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 30px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name'/>
          <Input placeholder='email'/>
          <Input placeholder='password'/>
          <Input placeholder='confirm password' />
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register