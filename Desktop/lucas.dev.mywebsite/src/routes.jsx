import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./Paginas/paginaPrincipal/index.jsx";
import MeusProjetos from "./Paginas/PagMeusProjetos/index.jsx";
import SobreMim from "./Paginas/PagSobreMim/index.jsx";
import MinhasSkills from "./Paginas/PagSkills/index.jsx";
import Header from "./componentes/header/index.jsx";


function AppRoutes() {
    return (
        
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />}></Route>
                    <Route path="/meusprojetos" element={<MeusProjetos />}></Route>
                    <Route path="minhasskills" element={<MinhasSkills />}></Route>
                    <Route path="sobremim" element={<SobreMim />}></Route>
                </Routes>
        </BrowserRouter>
        
        
    )
}

export default AppRoutes;