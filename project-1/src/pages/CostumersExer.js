import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme)=> ({
    margin:{
        marginTop: theme.spacing(2),
    }
}))

const ConsumersExer = ()=>{
    const styles = useStyles()

    return (
        <div>
            <div className = {styles.margin}>
                <TextField 
                 id="standard-basic"
                 label="Nome" 
                 variant="standard" 
                />
            </div>
            <div className = {styles.margin}>
                <TextField id="standard-basic" label="Sobrenome" variant="standard" />
            </div>
            <div className = {styles.margin}>
                <TextField id="standard-basic" label="Email" variant="standard" />
            </div>
            <div className = {styles.margin}>
                <Button variant="contained">Contained</Button>
            </div>
        </div>
    )
}

export default ConsumersExer