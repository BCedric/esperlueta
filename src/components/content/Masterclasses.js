import React from 'react'

const Masterclasses = ({ masterclasses }) => {
  return (
    <div>
      <h4>
        Stages (
        <a
          target="_blank"
          href="https://www.helloasso.com/associations/les-brayauds/evenements/esperlueta-4"
        >
          sur réservation
        </a>
        {' '})
      </h4>
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