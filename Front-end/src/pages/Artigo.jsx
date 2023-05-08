import Header from "../components/Header";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import api from "../axios";
import { useEffect, useState } from "react";

const Site = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.cores.fundo};
`
const Conteudo = styled.div`
  width: 80%;
  min-height: 84vh;
  background-color: ${props => props.theme.cores.conteudo};
  padding: 0 3rem;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #d4d4d8;
  box-shadow: 0 20px 25px -5px;
`

export default function Artigo (){
  const { slug } = useParams()
  const [artigo, setArtigo] = useState()

  useEffect(() => {
    (async () => {
      await api.get(`/api/artigos/${slug}`)
      .then(artigo => setArtigo(artigo))
    })()
  }, [])
  
  useEffect(() => {
    if(artigo) {
      document.querySelector('#conteudo').innerHTML = artigo.data.artigos.conteudo
    }
  }, [artigo])

  return(
    <Site>
      <Header />
      <Conteudo id="conteudo"></Conteudo>
    </Site>
  )
} 