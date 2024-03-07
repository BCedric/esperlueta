import React from 'react'
import { Link } from 'react-router-dom'
import VisibleComponent from '../../shared/VisibleComponent'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context('../../images/partenaires', false, /\.(png|jpe?g|svg)$/)
)

const Partenaires = () => {
  return (
    <VisibleComponent>
      <div className="elements-group">
        <h2 id="partenaires">Partenaires</h2>
        <p></p>
        <div className="imgs-partenaires">
          {images.map((img, index) => (
            <img height="200px" width="auto" key={index} src={img} alt={img} />
          ))}
        </div>
        <p className="informations" style={{ 'text-align': 'center' }}>
          <Link to="/mentions-legales">Mentions légales</Link> -
          <Link to="/cookies">Politique de cookies</Link>
        </p>
      </div>
    </VisibleComponent>
  )
}

export default Partenaires
