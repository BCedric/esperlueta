import React from 'react'

const Groupe = ({ nom, description, artistes, image }) => {
  return (
    <div className={`groupe `}>
      <h4>{nom}</h4>
      {image != null && (
        <img
          width="100%"
          height="auto"
          src={
            image.includes('http') ? image : require(`../../images/${image}`)
          }
          alt={nom}
        />
      )}
      <p>{description}</p>
      <ul className="artistes">
        {Object.keys(artistes).map((a, i) => (
          <li key={i}>
            <strong>{a}</strong> : {artistes[a]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Groupe
