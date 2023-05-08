import { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../axios'
import { FaTrashAlt, FaArrowCircleUp } from "react-icons/fa"
import { VscClose } from "react-icons/vsc";
import { useContext } from 'react';
import { Context } from '../../Context';

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
const Bg = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${props => props.theme.cores.fundo};
  overflow: hidden;
`
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Categorias = styled.div`
  width: max-content;
  max-height: 90%;
  overflow-y: auto;
  background-color: #F7E7CE;
  border: 4px solid #000;
  padding: 1rem;
  box-shadow: 0 25px 50px 0 #231709;
  border-radius: 8px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  & > h1 {
    font-weight: bold;
    font-size: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #000;
  }

  & > div > div {
    width: 20%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`
const CriarCategoria = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > input {
    width: 40%;
    border-radius: 6px;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 15rem;
  }
`
const ModalExcluir = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
  z-index: 10;
  position: fixed;

  & > div {
    width: 30%;
    height: 40%;
    background-color: #B0B0B0;
    border-radius: 8px;
    padding: 1.5rem;

    & > h1 {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 20%;
      font-weight: bold;
    }

    & > div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`
const ModalAtualizar = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
  z-index: 10;
  position: fixed;

  & > div {
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #B0B0B0;
    border-radius: 8px;
    padding: 1.5rem; 
    position: relative;

    & > svg {
      position: absolute;
      top: 3%;
      right: 4%;
      z-index: 10;
      cursor: pointer;
    }

    & > input {
      width: 90%;
      border-radius: 6px;
      font-size: 1.5rem;
      text-align: center;
      border: 1px solid #000;
    }

    & > button {
      width: 80%;
    }
  }
`
const Button = styled.button`
  width: 30%;
  height: 4rem;
  color: #B34200;
  background-color: #00FFFF;
  border: 1px solid #007FFF;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.5rem;
  transition: .3s;
  position: relative;
  font-family: ${props => props.theme.fonts.textos};
  cursor: pointer;
  
  &:hover {
    background-color: #007FFF;
    color: #FF5E00;
    text-shadow: 0px 4px 6px #000;
  }
`

export default function AtualizarCategorias() {

  const { categorias } = useContext(Context)

  const [deletarCategoria, setDeletarCategoria] = useState('')
  const [atualizarCategoria, setAtualizarCategoria] = useState('')

  const salvarCategoria = async () => {
    const categoria = document.querySelector('#categoria').value

    if(!categoria) {
      alert('Você deve escrever o nome da categoria')
      return
    }

    api.post('/api/category', { categoria })
      .then(() => alert('Categoria criada com sucesso.'))
      .catch(error => alert(error.response.data.mensagem || 'Ocorreu um erro ao criar a categoria.'))

    document.querySelector('#categoria').value = ''
  }

  return (
    <div>
      <Header>
        <img src="../src/img/logo.png" />
        <span>Criar, alterar ou excluir categorias</span>
      </Header>
      <Bg>
        <ModalExcluir className='modalExcluir'>
          <div>
            <h1>Tem certeza que deseja excluir a categoria?</h1>
            <div>
              <Button onClick={async () => {
                document.querySelector('.modalExcluir').style.display = "none"
                await api.delete(`/api/category/${deletarCategoria.categoria}`)
                  .then(() => alert('A categoria foi deletada com sucesso.'))
                  .catch(error => alert(error.response.data.mensagem || 'Ocorreu um erro ao excluir a categoria.'))
              }}>Sim</Button>
              <Button onClick={() => {
                document.querySelector('.modalExcluir').style.display = "none"
              }}>Não</Button>
            </div>
          </div>
        </ModalExcluir>
        <ModalAtualizar className='modalAtualizar'>
          <div>
            <VscClose size={50} color='#1b1b1b' onClick={() => document.querySelector('.modalAtualizar').style.display = "none" }/>
            <input type="text" id='titulo' defaultValue={atualizarCategoria.categoria} />
            <Button onClick={() => {
              const categoria = document.querySelector('#titulo').value

              document.querySelector('.modalAtualizar').style.display = "none"
              api.put(`/api/category/${atualizarCategoria.categoria}`, { newCategory: categoria })
              .then(() => alert('A categoria foi atualizada com sucesso.'))
              .catch(error => alert(error.response.data.mensagem || 'Ocorreu um erro ao atualizar a categoria.'))
            }}>Atualizar categoria</Button>
          </div>
        </ModalAtualizar>
        <Main>
          <Categorias>
            <h1>Categorias criadas</h1>
            {categorias ? categorias.map((categoria, indice) => (
              <div key={categoria.categoria.toString()}>
                <h2>{categoria.categoria}</h2>
                <div>
                  <FaTrashAlt size={24} onClick={async () => {
                    setDeletarCategoria(categorias[indice])
                    document.querySelector('.modalExcluir').style.display = "flex"
                  }} />
                  <FaArrowCircleUp size={24} onClick={async () => {
                    setAtualizarCategoria(categorias[indice])
                    document.querySelector('.modalAtualizar').style.display = "flex"
                  }} />
                </div>
              </div>
            )) : <h2>Não há categorias salvas</h2>}
          </Categorias>
          <CriarCategoria>
            <input type="text" placeholder='Nova categoria' id='categoria' />
            <Button onClick={salvarCategoria}>Criar categoria</Button>
          </CriarCategoria>
        </Main>
      </Bg>
    </div>
  )
}