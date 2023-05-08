import { useState, useEffect, createContext } from "react";
import api from "./axios";

export const Context = createContext()

export default function Provider ({ children }) {
  const [categorias, setCategorias] = useState()

  useEffect(() => {
    (async () => {
      await api.get('/api/category')
      .then(data => setCategorias(data.data))
    }
    )()
  }, [])

  return(
    <Context.Provider value={{ categorias, setCategorias }}>
      { children }
    </Context.Provider>
  )
}