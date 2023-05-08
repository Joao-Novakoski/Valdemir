import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Artigo from "./pages/Artigo"
import AdminMenu from "./pages/admin/AdminMenu"
import CriarArtigo from "./pages/admin/CriarArtigo"
import AlterarArtigo from "./pages/admin/AlterarArtigo"
import AtualizarCategorias from "./pages/admin/AtualizarCategorias"
import AtualizarArtigo from "./pages/admin/AtualizarArtigo"
import Login from "./pages/admin/Login"

function App() {
    const PrivateRoute = ({ Admin, Component }) => {
        const isLogged = localStorage.getItem(
            import.meta.env.REACT_TOKEN_KEY
        )

        if (isLogged) return Component

        if (Admin) return <Login />

        return <Navigate to={"/admin"} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/artigo/:slug'
                    element={<Artigo />}
                />

                <Route
                    path='/admin'
                    element={
                        <PrivateRoute
                            Admin
                            Component={<AdminMenu />}
                        />
                    }
                />
                <Route
                    path='/admin/criarArtigos'
                    element={<PrivateRoute Component={<CriarArtigo />} />}
                />
                <Route
                    path='/admin/categorias'
                    element={
                        <PrivateRoute Component={<AtualizarCategorias />} />
                    }
                />
                <Route
                    path='/admin/atualizar'
                    element={<PrivateRoute Component={<AlterarArtigo />} />}
                />
                <Route
                    path='/admin/atualizar/artigo/:slug'
                    element={<PrivateRoute Component={<AtualizarArtigo />} />}
                />
                <Route
                    path='/admin/atualizar/sub-artigo/:slug'
                    element={
                        <PrivateRoute
                            Component={<AtualizarArtigo subArtigo />}
                        />
                    }
                />
                <Route
                    path='/admin/*'
                    element={
                        <PrivateRoute Component={<Navigate to={"/admin"} />} />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
