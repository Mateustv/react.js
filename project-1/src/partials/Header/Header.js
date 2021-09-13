import {useState} from 'react'
import React from 'react'
import{useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import GroupAddIcon from '@material-ui/icons/GroupAdd'

import useStyles from './Header.style'



const Header = ()=>{

  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)
  const history = useHistory()
  
  
  const handleToggleMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  const handleClick = (rota)=>{
    history.push(rota)
    handleToggleMenu()
  }

  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Project One
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <Drawer open={openMenu} onClose ={()=> handleToggleMenu() }>
        <List>
          
          <ListItem button onClick={()=>{handleClick('/')}}>
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
          
          <ListItem button onClick={()=>{handleClick('/Costumers')}}>
            <ListItemIcon>
              <GroupIcon></GroupIcon>
            </ListItemIcon>
            <ListItemText>
              Lista De Clientes
            </ListItemText>
          </ListItem>

          <ListItem button onClick={()=>{handleClick('/Costumers/add')}}>
            <ListItemIcon>
              <GroupAddIcon></GroupAddIcon>
            </ListItemIcon>
            <ListItemText>
              Adicionar Clientes
            </ListItemText>
          </ListItem>
        
        </List>
      </Drawer>
    </div>
  )
}


export default Header