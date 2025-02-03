import React from 'react'
import VisibleComponent from '../../shared/VisibleComponent'

const Contact = () => {
  return (
    <VisibleComponent>
      <div id="contact" className="elements-group">
        <h2>Contact</h2>
        <p className="centered">contact@brayauds.fr</p>
        <p className="centered">
          04 73 63 36 75 (du lundi au vendredi de 10h-12h, 14h-16h)
        </p>
      </div>
    </VisibleComponent>
  )
}

export default Contact
