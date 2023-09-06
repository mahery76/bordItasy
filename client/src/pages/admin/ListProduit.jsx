import React, { useEffect, useState } from 'react'

function ListProduit() {
  const [userInfos, setUserInfos] = useState({})
  useEffect(() => {
    setUserInfos({
      userName:localStorage.getItem('userName'),
      userRole:localStorage.getItem('userRole')
    })
  }, [])
  useEffect(() => {
    console.log(userInfos)
  }, [userInfos])
  return (
    <div>
      ListProduit
    </div>
  )
}

export default ListProduit