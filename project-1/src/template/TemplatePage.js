import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(()=>({
  container:{
    padding:'15px 0'
  }
}))
const Page = ({title, Component}) =>{
  const theme = useStyles()
  return(
    <>
        <Typography variant="h1" component="h2" gutterBottom>
            {title}
        </Typography>
        <Component/>
    </>
  )
}

export default Page