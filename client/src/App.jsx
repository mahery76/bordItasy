import { Link, Route, Routes } from "react-router-dom"
import Connexion from './pages/connexion'
import ListProduit from './pages/admin/ListProduit'
import Statistique from './pages/admin/Statistique'
import Commande from './pages/employee/Commande'
import NotFound from "./pages/NotFound"
import LayoutProduit from "./pages/admin/LayoutProduit"
import Produit from "./pages/admin/Produit"


function App() {
  return (
    <>
      {/* <Connexion/> */}
      <Routes>
        <Route path="/" element={<Connexion />}/>
        <Route path="/admin" element={<LayoutProduit/>}>
          <Route index element={<ListProduit/>}/>
          <Route path=":id" element={<Produit/>}/>
          <Route path="statistique" element={<Statistique/>}/>
        </Route>
        <Route path="/employee" element={<Commande />} />
      </Routes>
    </>
  )
}

export default App
