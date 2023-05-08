import styled from "styled-components"

const Titulo = styled.h1`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: 4.5rem;
  font-family: ${(props) => props.theme.fonts.titulos};
  font-weight: bold;
  text-align: center;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  color: #231709;
`
const Caixa = styled.div`
  width: 80%;
  border: 2px solid #000;
  border-radius: 8px;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 20px 40px -15px #000;

  & > h2 {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: #231709;
  }

  & > p {
    font-size: 1.5rem;
    margin: 1.5rem;
    color: #231709;
  }
`

export default function Main() {
  return (
    <div>
      <Titulo>
        Sistema Narrativo de Investigação <br /> para Jogos de Baixa Fantasia
      </Titulo>
      <div>
        <Caixa>
          <h2>O que é RPG?</h2>
          <p>
            O <strong>RPG</strong> (Role-Playing Game) - ou jogo de
            interpretação de papéis, em tradução livre - é um tipo de jogo no
            qual um grupo de pessoas cria personagens e assume seus papéis,
            interpretando uma narrativa de forma colaborativa. É como uma
            espécie de teatro de improviso, no qual mesmo sem haver um roteiro
            prédeterminado os atores podem agir livremente e direcionar os rumos
            da história mediante suas escolhas, porém, cujo progresso de dá de
            acordo com um conjunto básico de regras: o <strong>sistema</strong>.
          </p>
          <p>
            Um dos jogadores, chamado de <strong>narrador</strong>, fica
            responsável por mediar a trama - uma espécie de roteirista ou
            diretor - criando sua <strong>ambientação</strong> (cenário e tema)
            e interpretando os personagens não-jogadores
          </p>
        </Caixa>
      </div>
    </div>
  )
}
