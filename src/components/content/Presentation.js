import React from 'react'
import VisibleComponent from '../../shared/VisibleComponent'

const Presentation = () => {
  return (
    <VisibleComponent>
      <div className="elements-group">
        <VisibleComponent className="centre">
          <h2 id="presentation">Présentation</h2>
          <p>
            Le printemps arrive et le festival Esperlueta s’invite pour sa
            troisième édition à Clermont-Ferrand !
          </p>
          <p>
            L’esperlueta, vous savez, ce petit symbole que l’on ne sait pas
            comment il s’appelle, traduit en occitan. Esperlueta c’est aussi,
            au-delà de cette nouvelle information que vous pourrez partager avec
            vos proches, l’image des liens tissés entre les mondes associatifs
            gravitant autour de la capitale auvergnate, et à l’initiative de
            cette fête. Et cette année, les Brayauds CDMDT 63 s’associent avec
            LieU’topie et le BDE ARDUS pour vous réserver une heureuse fin de
            semaine.
          </p>
          <p>
            Amoureux et curieux des musiques et danses trad pourront se
            retrouver pour faire la fête, écouter de la musique dans les rues de
            la capitale auvergnate, découvrir des styles musicaux bien d’ici et
            d’ailleurs, rencontrer des personnes bien d’ici et d’ailleurs tout
            comme danser et réveiller la ville à la douceur des beaux jours (ou
            éventuellement à leur arrivée imminente). A très vite !
          </p>
          <p>
            LieU’topie est une association étudiante culturelle et solidaire à
            fort ancrage local mais aussi un tiers lieu revêtant la forme d’un
            café, d’un bar et d’un lieu d’éducation populaire. L’association
            propose une programmation autour des pratiques culturelles, de
            l’alimentation saine, de l’agriculture et de l’écologie via des
            rencontres sous forme d’ateliers, masterclass, conférences-débats ou
            concerts.
          </p>
          <p>
            Le BDE ARDUS, Bureau des Étudiant.es de la filière Arts du
            Spectacle, représente ses étudiant.es de licence et master. Née
            d’une initiative étudiante, Ardus est une association qui a pour
            objectif de promouvoir le patrimoine culturel de la Ville de
            Clermont-Ferrand auprès des jeunes grâce à des événements divers
            organisés au cours de l’année universitaire (concerts, spectacles,
            soirées à thèmes,…).
          </p>
        </VisibleComponent>
      </div>
    </VisibleComponent>
  )
}

export default Presentation
