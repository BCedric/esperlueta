import React from 'react'

import progData from '../../data/groupes.json'
import VisibleComponent from '../../shared/VisibleComponent'
import Evening from './Evening'
import Masterclasses from './Masterclasses'

const Programmation = () => {
  return (
    <VisibleComponent>
      <div className="elements-group">
        <h2 id="programmation">Programmation</h2>
        <div className="groupes">
          {progData.map((value) => (
            <VisibleComponent>
              <div className={`programmation-${value.date} jour`}>
                <h3>
                  {`${
                    value.date.charAt(0).toUpperCase() + value.date.slice(1)
                  }`}{' '}
                  {value.place != null && '-'} {value.place}{' '}
                  {value.time != null && '-'} {value.time}
                </h3>
                {value.description != null && (
                  <p className="informations">{value.description}</p>
                )}
                {/* {key.includes('vendredi') ? <Vendredi /> : <Samedi />} */}

                {value.events != null && (
                  <ul className="events">
                    {value.events.map((e, index) => (
                      <li className="event" key={index}>
                        <span className="event-label">
                          {e.time}
                          {e.place != null && ` - ${e.place}`}
                        </span>
                        {e.link != null ? (
                          <a href={e.link} target="_blank" rel="noreferrer">
                            {e.description}
                          </a>
                        ) : (
                          <span>{e.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {value.masterclasses != null && (
                  <Masterclasses masterclasses={value.masterclasses} />
                )}
                {value.evening != null && <Evening evening={value.evening} />}
              </div>
            </VisibleComponent>
          ))}
        </div>
      </div>
    </VisibleComponent>
  )
}

export default Programmation
