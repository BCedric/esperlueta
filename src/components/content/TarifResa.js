import React from 'react'
import VisibleComponent from '../../shared/VisibleComponent'

const TarifResa = () => {
  return (
    <VisibleComponent>
      <div id="tarifs-reservation" className="elements-group centre">
        <h2>Tarifs & réservation </h2>
        <h3>Tarifs</h3>
        <p>
          Tarif unique 6€. Une caisse de soutien à l'Association France
          Palestine Solidarité est mise en place pour ceux et celles qui le
          souhaitent
        </p>
        {/* <p>Pass 1 soir : 6€ tarif réduit / 12€ plein tarif</p>
        <p>Pass 2 soirs : 10€ tarif réduit / 20€ plein tarif</p> */}
        {/* <p>
          Tarif réduit : étudiants, demandeurs d'emploi, RSA, réseau associatif,
          moins de 18 ans
        </p> */}
        <p>
          Gratuit: -12 ans et accompagnateur de personne en situation de
          handicap
        </p>
        <h3>Réservation</h3>
        {/* <p>Les inscriptions ne sont pas encore ouvertes, revenez bientôt !</p> */}
        <p>
          Les inscriptions sont ouvertes, n’hésitez pas à réserver votre place{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.helloasso.com/associations/les-brayauds/evenements/esperlueta-4"
          >
            par là
          </a>
          <p>Réservations conseillées (places limitées).</p>
        </p>
      </div>
    </VisibleComponent>
  )
}

export default TarifResa
