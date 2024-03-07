import React from 'react'
import Contact from './content/Contact'
// import InfosPratiques from './content/InfosPratiques'
import Partenaires from './content/Partenaires'
import Presentation from './content/Presentation'
import Programmation from './content/Programmation'
import TarifResa from './content/TarifResa'

const Content = () => {
  return (
    <div className="content">
      <Presentation />
      <Programmation />

      {/* <InfosPratiques /> */}
      <TarifResa />
      <Contact />
      <Partenaires />
    </div>
  )
}

export default Content
