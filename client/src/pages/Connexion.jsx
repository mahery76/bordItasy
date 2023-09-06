import React, { useEffect, useRef, useState } from 'react'
import "./Connexion.css"
import axios from 'axios'


function Connexion() {
  const [userInfo, setUserInfo] = useState({})
  const username = useRef()
  const password = useRef()
  const [resData, setResData] = useState([])
  const [shouldRunEffect, setShouldRunEffect] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()
    setUserInfo({
      username: username.current.value,
      password: password.current.value
    })
    setShouldRunEffect(true)
  }
 
  const getUserInfo = async () => {
    try {
      console.log('ilay vao halefa ao am axios' ,userInfo.username, userInfo.password)
      const res = await axios.get(`http://localhost:3001/api/users?username=${userInfo.username}&password=${userInfo.password}`)
      console.log(res.data)
      setResData(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    if(shouldRunEffect){
      console.log("ireto ilay avy am forme" ,userInfo.username, userInfo.password)
      getUserInfo()
    }
  },[userInfo])

  return (
    <div className='connexion__main'>
        <div className="connexion__title">Connexion</div>
        <form className="connexion__form" onSubmit={onSubmit} >
            <label htmlFor="">Nom d'utilisateur</label>
            <input type="text" ref={username}/>
            <label htmlFor="">Mot de passe</label>
            <input type="password" ref={password}/>
            <input type="submit" value="Se connecter" />
        </form>
    </div>
  )
}

export default Connexion