import React from 'react'
import Groupe from './Groupe'

const Evening = ({ evening }) => {
  return (
    <div>
      <h4>
        {evening.place} - {evening.time}
      </h4>
      <div className="jour-groupes">
        {evening.groups.map(({ nom, description, artistes, image }, i) => (
          <Groupe
            key={i}
            nom={nom}
            description={description}
            artistes={artistes}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}

export default Evening
