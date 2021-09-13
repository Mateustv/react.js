import React from 'react'
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
    
    return (
        <form>
            <div className = {classe.margins}>
                <TextField id="outlined-basic" label="Digite seu nome" variant="outlined" />
            </div>
            <div className = {classe.margins}>
                <TextField id="outlined-basic" label="Digite seu sobrenome" variant="outlined" />
            </div>
            <div className = {classe.margins}>
                <Button variant="outlined">Enviar</Button>
            </div>
        </form>
    )
}

export default CostumersAdd