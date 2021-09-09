import React from "react"
import {Link} from "react-router-dom"

const Home = ()=>{
  return (
    <ul>
      <li>
        <Link to="/users">Usuarios</Link>
      </li>
    </ul>
  )
}

export default Home