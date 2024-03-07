import React from 'react'
import Groupe from './Groupe'

import groupes from '../../data/groupes.json'
import VisibleComponent from '../../shared/VisibleComponent'
import Samedi from './Samedi'
import Vendredi from './Vendredi'

const Programmation = () => {
  return (
    <VisibleComponent>
      <div className="elements-group">
        <h2 id="programmation">Programmation</h2>
        <div className="groupes">
          {Object.keys(groupes).map((key) => (
            <VisibleComponent>
              <div className={`programmation-${key} jour`}>
                <h3>
                  {`${key.charAt(0).toUpperCase() + key.slice(1)}`} - Maison de
                  l'Oradou
                </h3>
                {key.includes('vendredi') ? <Vendredi /> : <Samedi />}

                <div className="jour-groupes">
                  {groupes[key].map(
                    ({ nom, description, artistes, image }, i) => (
                      <Groupe
                        key={i}
                        nom={nom}
                        description={description}
                        artistes={artistes}
                        image={image}
                      />
                    )
                  )}
                </div>
              </div>
            </VisibleComponent>
          ))}
        </div>
      </div>
    </VisibleComponent>
  )
}

export default Programmation
