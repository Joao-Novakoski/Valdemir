import TextEditor from '../../components/TextEditor';
import styled from 'styled-components';
import { useState } from 'react';
import api from '../../axios'
import { useContext } from 'react';
import { Context } from '../../Context';
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #d1d5db;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > span {
    font-size: 3rem;
    font-weight: bold;
  }

  & > img {
    height: 90%;
    position: absolute;
    left: 2rem;
  }
`
const Bg = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: ${props => props.theme.cores.fundo};
  position: absolute;
`
const Inputs = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  & > input {
    width: 20%;
    border-radius: 6px;
    font-size: 1.25rem;
    text-align: center;
    border: 1px solid #000;
    position: relative;
  }

  & > div {
    width: max-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 20px;

    &:before {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 10px;
      margin-left: 4%;
      position: absolute;
      top: 0;
      content: 'Categoria:';
      color: #fff;
      text-shadow: 0px 4px 6px #000;
    }

    & > div > label > span {
      font-size: 1.25rem;
      margin-right: 8px;
      margin-left: 8px;
      color: #ff5e00e5;
    }

    & > div > label > input {
      appearance: unset;
      width: 10px;
      height: 10px;
      border-radius: 90px;
      background-color: transparent;
      border: 1px solid #00FFFF;

      &:hover {
        background-color: #00FFFF;
      }

      &:checked {
        background-color: #00FFFF;
      }
    }
  }
`
const SubArtigo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > input {
    appearance: unset;
    width: 10px;
    height: 10px;
    border-radius: 90px;
    background-color: transparent;
    border: 1px solid #00FFFF;

    &:hover {
      background-color: #00FFFF;
    }

    &:checked {
      background-color: #00FFFF;
    }
  }

  & > div > label {
    font-size: 1.25rem;
    margin-left: 6px;
    margin-right: 15px;
    color: #ff5e00e5;
  }

  & > select {
    width: max-content;
    font-size: 1.125rem;
    margin-top: 3rem;
  }
`
const Button = styled.button`
  width: 15%;
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
  left: 42.5%;
  font-family: ${props => props.theme.fonts.textos};
  cursor: pointer;

  &:hover {
    background-color: #007FFF;
    color: #FF5E00;
    text-shadow: 0px 4px 6px #000;
  }
`


export default function CriarArtigo() {
  const navigate = useNavigate()

  const salvarArtigo = async () => {

    const titulo = document.querySelector('#titulo').value
    const categories = document.getElementsByName('categorias')
    if(subArtigo) {
      const SubArtigo = document.querySelector('#subArtigo').value
    }
    let categoria = null

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].checked) {
        categoria = categories[i].id
        break
      }
    }

    if (subArtigo) {
      await api.post('/api/subArticle', {
        titulo: titulo,
        categoria: categoria,
        conteudo: conteudo,
        artigo: SubArtigo
      })
      .then(() => {
        alert('Artigo criado com sucesso.')
        return navigate('/admin')
      })
      .catch(error => alert(error.response.data.mensagem || 'Erro ao criar o artigo.'))
    } else {
      await api.post('/api/article', { titulo, categoria, conteudo })
      .then(() => {
        alert('Artigo criado com sucesso.')
        return navigate('/admin')
      })
      .catch(error => alert(error.response.data.mensagem || 'Erro ao criar o artigo.'))
    }

  }

  const { categorias, setCategorias } = useContext(Context)
  const [subArtigo, setSubArtigo] = useState(false)
  const [conteudo, setConteudo] = useState('')

  const subArtigoSelect = () => {
    if (document.getElementById('sub-artigo').checked) setSubArtigo(true)
    else setSubArtigo(false)
  }
  return (
    <div>
      <Header>
        <img src="../src/img/logo.png" />
        <span>Criar artigo</span>
      </Header>
      <Bg>
        <Inputs>
          <input type="text" id='titulo' placeholder='Nome do artigo' />
          <SubArtigo>
            <div>
              <input type="radio" id='artigo' name='sub-artigo' defaultChecked onChange={subArtigoSelect} />
              <label htmlFor="artigo">Artigo</label>
              <input type="radio" id='sub-artigo' name='sub-artigo' onChange={subArtigoSelect} />
              <label htmlFor="sub-artigo">Sub-artigo</label>
            </div>
            {subArtigo && (
              <select id='subArtigo'>
                <option value="" defaultChecked hidden>Escolha um artigo pai</option>
                {categorias ? categorias.map(categoria => (
                  <optgroup label={categoria.categoria}>
                    {categoria.artigos && categoria.artigos.map(artigo => (
                      <option value={artigo.titulo}>{artigo.titulo}</option>
                    ))}
                  </optgroup>
                )) : <option value="" disabled>Não há categorias e sub-artigos</option>}
              </select>
            )}
          </SubArtigo>
          <div>
            {categorias ? categorias.map(categoria => (
              <div key={categoria.id.toString()}>
                <label>
                  <input type="radio" name='categorias' id={categoria.categoria} />
                  <span>{categoria.categoria}</span>
                </label>
              </div>
            )) : <h2>Não há categorias salvas</h2>}
          </div>
        </Inputs>
        <TextEditor parentCallback={conteudo => setConteudo(conteudo)} />
        <Button onClick={salvarArtigo}>Criar artigo</Button>
      </Bg>
    </div>

  );
};