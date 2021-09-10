import Header from "../partials/Header/Header"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(()=>({
  container:{
    padding:'15px 0'
  }
}))
const Default = ({children}) =>{
  const theme = useStyles()
  return(
    <>
      <Header />
      <Container  className={theme.container}>
        {children}
      </Container>
    </>
  )
}

export default Default