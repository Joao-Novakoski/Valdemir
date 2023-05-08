import styled from 'styled-components'
import Categorias2 from '../../components/Categorias2'

const Site = styled.div`
  background-color: ${props => props.theme.cores.fundo};
`
const Header = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #d1d5db;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: 2.9rem;
    font-weight: bold;
  }

  & > img {
    height: 9vh;
    position: absolute;
    left: 2rem;
  }
`
const Conteudo = styled.div`
  width: 80%;
  min-height: 90vh;
  background-color: ${props => props.theme.cores.conteudo};
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #d4d4d8;
  box-shadow: 0 20px 25px -5px #000;
  border-radius: 4px;
`

export default function AlterarArtigo() {
  return(
    <Site>
      <Header>
        <img src="../src/img/logo.png" />
        <span>Criar, alterar ou excluir categorias</span>
      </Header>
      <Conteudo>
        <Categorias2 />
      </Conteudo>
    </Site>
  )
}