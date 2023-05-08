import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './globalCSS';
import Provider from './Context'
import { ThemeProvider } from 'styled-components';

const theme = {
  fonts: {
    titulos: 'PRISTINA, serif',
    textos: 'Arial, sans-serif'
  },
  cores: {
    fundo: '#4E2F2F',
    conteudo: '#f7e7ce'
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
