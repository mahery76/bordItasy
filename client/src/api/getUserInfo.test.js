const getUserInfo = async ({username, password}) => {
    try {
      console.log('ilay vao halefa ao am axios' ,username, password)
      const res = await axios.get(`http://localhost:3001/api/users?username=${username}&password=${password}`)
      console.log(res.data)
      return(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  exports.default = getUserInfo;