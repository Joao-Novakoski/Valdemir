import styled from "styled-components"
import api from "../../axios"

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.cores.fundo};
`
const Modal = styled.div`
  background-color: #F7E7CE;
  border: 4px solid #000;
  padding: 1.5rem;
  box-shadow: 0 25px 50px 0 #231709;
  border-radius: 4px;

  & > h1 {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
    width: 70%;
    height: 3rem;
    margin-bottom: 2rem;
    position: relative;

      & > input {
      width: 100%;
      height: 100%;
      font-size: 1.25rem;
      border: 1px solid #000;
      border-radius: 4px;
      }
    }
  }
`
const Button = styled.input`
  width: 50%;
  height: 4rem;
  color: #B34200;
  background-color: #00FFFF;
  border: 1px solid #007FFF;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.25rem;
  transition: .3s;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-family: ${props => props.theme.fonts.textos};
  cursor: pointer;

  &:hover {
    background-color: #007FFF;
    color: #FF5E00;
    text-shadow: 0px 4px 6px #000;
  }
`


export default function Login() {
  const login = async () => {
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    await api.post('/api/user/logar', { email, senha })
    .then(token => localStorage.setItem(import.meta.env.VITE_TOKEN_KEY ,token.data.token))
  }

  return(
    <Bg>
      <Modal>
        <h1>Login de administrador</h1>
        <form action="" onSubmit={() => login()}>
          <div>
            <input type="email" placeholder="Email" id="email" autoComplete="off"/>
          </div>
          <div>
            <input type="password" placeholder="Senha" id="senha"/>
          </div>  
          <Button type='submit' placeholder="Logar"/>
        </form>
      </Modal>
    </Bg>
  )
}