import styled from "styled-components"
import { useContext } from "react"
import { Context } from "../Context"

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Categoria = styled.div`
  width: 30%;
  margin-bottom: 4rem;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 20px 40px -15px #000;

  & > h2 {
    font-family: ${(props) => props.theme.fonts.titulos};
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.25rem;
    border-bottom: 2px solid #000;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
  }

  & > div > div > a {
    width: 100%;
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.textos};
    font-size: 1.25rem;
    color: #041c24;

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
    <div>
      <Main>
        {categorias &&
          categorias.map((categoria) => (
            <Categoria>
              <h2>{categoria.categoria}</h2>
              <div>
                {categoria.artigos &&
                  categoria.artigos.map((artigo) => (
                    <div>
                      <a href={`/artigo${artigo.slug}`}>{artigo.titulo}</a>
                      {artigo.SubArtigos &&
                        artigo.SubArtigos.map((subArtigo) => (
                          <SubArtigo href={`artigo/${subArtigo.slug}`}>
                            {subArtigo.titulo}
                          </SubArtigo>
                        ))}
                    </div>
                  ))}
              </div>
            </Categoria>
          ))}
      </Main>
    </div>
  )
}
