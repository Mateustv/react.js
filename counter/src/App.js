import React, {useState} from 'react'

import Counter from './Counter'
import Albums from './Albums'

const pages = {
  Albums:{
    text:"Albuns",
    component: Albums,
  },
  Counter:{
    text:"Contador",
    component: Counter,
  }
}

function App() {
  const [page, setpage] = useState('Albums')
  
  const handleOnChange = (pageChosen) =>{
    setpage(pageChosen)
  }
  
  const Page = pages[page].component

  const pagesNames = Object.keys(pages)
  
  return (
    <>
    {
      pagesNames.map((page) => <button onClick = {
        ()=>{handleOnChange(page)}
      }>{pages[page].text}</button> )
    }
    {Page && <Page />}
    </>
  )
}

export default App
