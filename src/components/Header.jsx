import React from 'react'

const Header = (props) => {
  return (
    <header>
      <h1 style={{
        backgroundColor: "mediumblue",
        color: "white"
      }}>{props.title}</h1>
    </header>
  )
}

export default Header
