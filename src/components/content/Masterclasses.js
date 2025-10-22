import React from 'react'

const Masterclasses = ({ masterclasses }) => {
  return (
    <div>
      <h4>Stages</h4>
      <p className="informations" style={{ fontWeight: 'bold' }}>
        Rendez-vous sur le lieu du stage
      </p>
      {masterclasses.map((m, index) => (
        <div key={index}>
          <h4 className="masterclass-title">
            {m.title} - {m.place} - {m.time}
          </h4>
          <p>{m.description}</p>
          <p className="masterclass-intervener">Avec {m.intervener}</p>
        </div>
      ))}
    </div>
  )
}

export default Masterclasses