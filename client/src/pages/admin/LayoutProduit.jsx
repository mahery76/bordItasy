import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function LayoutProduit() {
  return (
    <div>
        <NavLink to="/admin">Produit</NavLink>
        <NavLink to="/admin/statistique">Statistique</NavLink>
        <button> Deconnecter </button>
        <Outlet/>
    </div>
  )
}

export default LayoutProduit