import React from 'react'
import Header from '../partials/Header'
import Nav from '../partials/Nav'

const Template = ({children, pages, activePage, onChangePage})=>{
  const name = pages[activePage].text
  return(
    <>
      <Header name = {name}/>
      <Nav pages={pages} onChangePage={onChangePage} />
      {children}
    </>
  )

}

export default Template