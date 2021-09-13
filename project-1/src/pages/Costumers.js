import {useState, useEffect} from 'react'
import axios from 'axios'
import CustumerCard from '../components/CustumerCard'
import Grid from '@material-ui/core/Grid';


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
      <Grid container spacing={5}>
        {
          costumers.map((item)=>(
            <Grid item xs ={12} md = {4}>
              <CustumerCard 
                name ={item.first_name}
                lastName = {item.last_name}
                email = {item.email}
                avatar = {item.avatar}
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default Costumers
