import React, {useState, useEffect} from 'react'

const Users = () => {
  const [loading,setLoading] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((data)=>{
      setUser(data)
      setLoading(false)
    })
  },[])

  return(
    <>
      {
        loading === true ? 'Carregando...': ''
      }
      {
        user.map(user => {
          return (
            <div>
              <span>
                Nome: {user.name} <br/>Email: {user.email}
              </span>
              <hr/>
            </div>
          )
        })
      }
    </>
  )
}

export default Users