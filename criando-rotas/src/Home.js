import React from "react"
import {Link} from "react-router-dom"
import { Button } from '@material-ui/core'

const Home = ()=>{
  return (
    <>
      <Button variant="contained" color="primary"><Link to="/users">Usuarios</Link></Button>
      <Button variant="contained" color="primary">Hello World</Button>;
    </>
  )
}

export default Home