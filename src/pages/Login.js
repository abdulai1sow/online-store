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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px 0px;
  margin: 10px;
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
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>REGISTER</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login