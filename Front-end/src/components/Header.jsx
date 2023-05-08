import styled from 'styled-components'

const Main = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #4E2F2F;
  box-shadow: 0 20px 25px -5px #00000050;
  display: flex;
  align-items: center;

  & > img {
    height: 90%;
    margin-left: 2.5rem;
  }
`

export default function Header() {
  return(
    <Main>
      <img src="../src/img/logo.png"/>
    </Main>
  )
}