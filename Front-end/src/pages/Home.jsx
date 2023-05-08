import Categories from "../components/Categories"
import Header from "../components/Header"
import MainText from "../components/MainText"
import styled from "styled-components"

const Site = styled.div`
  background-color: ${(props) => props.theme.cores.fundo};
`
const Conteudo = styled.div`
  width: 80%;
  min-height: 85vh;
  background-color: ${(props) => props.theme.cores.conteudo};
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #d4d4d8;
  box-shadow: 0 20px 25px -5px #000;
  border-radius: 4px;
`

export default function Home() {
  return (
    <Site>
      <Header />
      <Conteudo>
        <MainText />
        <Categories />
      </Conteudo>
    </Site>
  )
}
