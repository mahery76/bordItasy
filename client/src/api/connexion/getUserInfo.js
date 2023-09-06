import axios from "axios"

const getUserInfo = async ({ username, password }, setAuthenticated) => {
  try {
    console.log('ilay vao halefa ao am axios', username, password)
    const res = await axios.get(`http://localhost:3001/api/users?username=${username}&password=${password}`)
    console.log(res.data)
    setAuthenticated(true)
    localStorage.setItem('userName', res.data['nom_user'])
    localStorage.setItem('userRole', res.data['Role']['nom_role'])

    return (res.data)
  } catch (err) {
    setAuthenticated(false)
    alert("Nom d'utilisateur ou mot de passe incorrecte")
  }
}

export default getUserInfo;