import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from '@material-ui/icons/Clear'

import ModalAlert from './ModalAlert'

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
})

 const MediaCard = ({id, name, lastName, email, avatar, onRemoveCustomers}) => {
  
  const classes = useStyles()
  const [useModal, setUseModal] = useState(false)

  const handleToggleModal = () => {
    setUseModal(!useModal)
  }
  const handleModal = (id) => {
    onRemoveCustomers(id)
    handleToggleModal()
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={avatar}
            title= {`${name} ${lastName}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${name} ${lastName}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="Editar">            
            <EditIcon />
          </IconButton> 
          <IconButton aria-label="Remover" onClick={handleToggleModal}>
            <ClearIcon />          
          </IconButton>
        </CardActions>
      </Card>
      <ModalAlert open = {useModal} onClose ={handleToggleModal} onConfirm = {() => {handleModal(id)}} title = {'Deseja remover o usuario ?'} message = {'Apos remover o usario não terar mais voltar'}/>
    </>
  )
}

export default MediaCard