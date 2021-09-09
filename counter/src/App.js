import React, {useState} from 'react'

import Counter from './pages/Counte'
import Albums from './pages/Albums'
import Users from './pages/Users'
import Template from './templates/Template'

const pages = {
  Albums:{
    text:"Albuns",
    component: Albums,
  },
  Counter:{
    text:"Contador",
    component: Counter,
  },
  Users:{
    text:"Usuarios",
    component: Users,
  }
}

function App() {
  const [page, setpage] = useState('Albums')
  
  const handleOnChange = (pageChosen) =>{
    setpage(pageChosen)
  }
  
  const Page = pages[page].component
  
  return (
    <Template pages={pages} activePage={page} onChangePage={handleOnChange}>
    {Page && <Page />}
    </Template>
  )
}

export default App
