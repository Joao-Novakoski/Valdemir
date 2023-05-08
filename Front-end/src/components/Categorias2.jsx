import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import api from '../axios'
import { Context } from '../Context'

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2.5rem;
`
const Categoria = styled.div`
  width: 30%;
  margin-bottom: 4rem;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 20px 40px -15px #000;

  & > h2 {
    font-weight: bold;
    font-size: 1.5rem;
    font-family: ${props => props.theme.fonts.titulos};
    text-align: center;
    margin-bottom: 1.25rem;
    border-bottom: 2px solid #000;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
  }

  & > div > div > a {
    width: max-content;
    text-decoration: none;
    font-size: 1.25rem;
    font-family: ${props => props.theme.fonts.textos};
    color: #041C24;
    margin-bottom: 5px;
    cursor: pointer;

    :hover {
      text-decoration-line: underline;
    }
  }
`
const SubArtigo = styled.a`
  margin-left: 5%;
`

export default function Categorias() {

  const { categorias } = useContext(Context)

  return (
    <Main>
      {categorias && categorias.map(categoria => (
        <Categoria>
          <h2>{categoria.categoria}</h2>
          <div>
            {categoria.artigos && categoria.artigos.map(artigo => (
              <div>
                <a href={`/admin/atualizar/artigo/${artigo.slug}`}>{artigo.titulo}</a>
                {artigo.SubArtigos && artigo.SubArtigos.map(subArtigo => (
                  <SubArtigo href={`/admin/atualizar/sub-artigo/${subArtigo.slug}`}>{subArtigo.titulo}</SubArtigo>
                ))}
              </div>
            ))}
          </div>
        </Categoria>
      ))}
    </Main>
  )
}