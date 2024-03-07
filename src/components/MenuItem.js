import React from 'react'

const MenuItem = ({ name, onClick = () => {}, options = {} }) => {

  const handleClickScroll = (id) => {
    console.log(id)
    onClick()

    const element = document.getElementById(id)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <li onClick={() => handleClickScroll(`${name}`)}>
      <span>{options.label}</span>
    </li>
  )
}

export default MenuItem
