import React, { useEffect, useRef, useState } from 'react'
import "./Connexion.css"
import getUserInfo from '../api/connexion/getUserInfo'
import { Navigate } from 'react-router-dom'


function Connexion() {
  //put into this all infos from form
  const [userInfo, setUserInfo] = useState({})
  //username from form
  const username = useRef()
  // password from form
  const password = useRef()
  // put here the response from get request
  const [resData, setResData] = useState({})
  // for checking if infos from form are ready to be shown
  const [showFormData, setShowFormData] = useState(false);

  const [authenticated, setAuthenticated] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setUserInfo({
      username: username.current.value,
      password: password.current.value
    })
    // get the infos from form ready to be shown
    setShowFormData(true)
  }

  useEffect(() => {
    if (showFormData) {
      console.log("ireto ilay avy am forme", userInfo.username, userInfo.password)
      getUserInfo(userInfo, setAuthenticated)
        .then((userInfos => {
          setResData(userInfos)
        }))
    }
  }, [userInfo])

  if (!authenticated) {
    return (
      <div className='connexion__main'>
        <div className="connexion__title">Connexion</div>
        <form className="connexion__form" onSubmit={onSubmit} >
          <label htmlFor="">Nom d'utilisateur</label>
          <input type="text" ref={username} />
          <label htmlFor="">Mot de passe</label>
          <input type="password" ref={password} />

          <div className="connexion__button">
            <input type="submit" value="Se connecter" />
            <input type="reset" value="Effacer" />
          </div>

        </form>
      </div>
    )
  }
  else if(resData['Role']['nom_role']==="employee"){
    return <Navigate replace to="/employee" />
  }
  else if(resData['Role']['nom_role']==="admin"){
    return <Navigate replace to="/admin" />
  }

}

export default Connexion