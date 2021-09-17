import React, {useState} from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  margins: {
      margin: theme.spacing(3), 
    }
  }))

  
  
  
  const CostumersAdd = () => {
      const classe = useStyles()
      
      const [form, setForm] = useState({
          name : {
              value : '',
              error : false,
              helperText: '',
          },
          job : {
              value : '',
              error : false,
              helperText: '',
          },
      })
      

      const handleChange = (state) => {
        const {name, value} = state.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
      }

      const handleClick = () => {
        let hasError = false
        
        let setFormChange = {
            ...form,
        }

        
        if(!form.name.value){
            hasError = true

            setFormChange.name = {
                value: form.name.value,
                error: true,
                helperText:"Campo com error",
            }
        }

        if(!form.job.value){
            hasError = true

            setFormChange.job = {
                value: form.job.value,
                error: true,
                helperText:'Campo com error',
            }
        }
        
        if(hasError){
            return setForm(setFormChange) 
        }
        axios.post('https://reqres.in/api/users',{
            nome:form.nome.value,
            job:form.job.value,
        }).then((response) => {console.log(response)})
      }
    
    return (
        <div>
            <div className = {classe.margins}>
                <TextField 
                 error ={form.name.error}
                 helperText={form.name.error ? form.name.helperText : ''}
                 id="outlined-basic"
                 label="Digite seu nome"
                 variant="outlined" 
                 name="name" value={form.name.value} 
                 onChange={handleChange}
                />
            </div>

            <div className = {classe.margins}>
                <TextField 
                 error ={form.job.error}
                 helperText={form.job.error ? form.job.helperText : ''}
                 id="outlined-basic"
                 label="Digite seu Cargo"
                 variant="outlined" name= "job"
                 value={form.job.value} 
                 onChange={handleChange}
                />
            </div>

            <div className = {classe.margins}>
                <Button variant="outlined" onClick={handleClick}>Enviar</Button>
            </div>
        </div>
    )
}

export default CostumersAdd