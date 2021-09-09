import React from "react"
import './Header.css'

function Header({title,subtitle}){
  return (
    <header className = "title">
      <h1>
        {title}
      </h1>
      <h2>
        {subtitle}
      </h2>
    </header>
  )
}

export default Header