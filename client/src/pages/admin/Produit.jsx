import React from 'react'
import { useParams } from 'react-router-dom'
function Produit() {
  const {id} = useParams()
  return (
    <div>Produit {id}</div>
  )
}

export default Produit