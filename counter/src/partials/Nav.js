import React from 'react'

const Nav = ({pages,onChangePage}) => {
  const pagesNames = Object.keys(pages)
  return (
    <nav>
      {
        pagesNames.map((page) => <button onClick = {()=>{onChangePage(page)}}>{pages[page].text}</button> )
      }
    </nav>
  )

}

export default Nav