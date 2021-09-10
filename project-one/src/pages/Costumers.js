import {useState, useEffect} from 'react'
import axios from 'axios'
import CustumerCard from '../components/CustumerCard'

const Costumers  = () => {
  const [costumers, setCostumers] = useState([])
  useEffect(
    ()=>{
      axios.get('https://reqres.in/api/users?').then(costumersApi => {
        const {data} = costumersApi.data
        setCostumers(data)
      })
    },[]
  )

  return (
    <>
      <h1>Costumers</h1>
      {
        costumers.map((item)=>(
          <CustumerCard 
            name ={item.first_name}
            lastName = {item.last_name}
            email = {item.email}
            avatar = {item.avatar}
          />
        ))
      }
    </>
  )
}

export default Costumers
