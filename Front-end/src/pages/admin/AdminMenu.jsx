import styled from 'styled-components'

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.cores.fundo};
  display: flex;
  justify-content: center;
  align-items: center;
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
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > a {
    width: 80%;
    height: 4rem;
    text-decoration: none;
    color: #B34200;
    font-family: ${props => props.theme.fonts.textos};
    font-weight: bold;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00FFFF;
    border: 2px solid #007FFF;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    transition: .4s;
    cursor: pointer;

    :hover {
      background-color: #007FFF;
      color: #FF5E00;
      text-shadow: 0px 4px 6px #000;  
    }
  }
`

export default function AdminMenu() {
  return (
    <Bg>
      <Modal>
        <h1>Painel de administração</h1>
        <Links>
          <a href='/admin/criarArtigos' >Criar novo artigo</a>
          <a href="/admin/categorias">Criar, alterar ou excluir categorias</a>
          <a href='/admin/atualizar' >Atualizar ou excluir um artigo</a>
          <a href='/' >Voltar para a página inicial</a>
        </Links>
      </Modal>
    </Bg>
  )
}