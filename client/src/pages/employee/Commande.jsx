import React, { useEffect, useState } from 'react'


function Commande() {
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
      Commande
    </div>
  )
}

export default Commande