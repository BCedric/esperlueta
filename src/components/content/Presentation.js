import React from 'react'
import VisibleComponent from '../../shared/VisibleComponent'
import savedTheDateImg from '../../images/annonce-save-the-date.webp'

const Presentation = () => {
  return (
    <VisibleComponent>
      <div className="elements-group">
        <VisibleComponent className="centre">
          <p>
            Nous vous donnons rendez-vous du 17 au 21 mars 2026 à
            Clermont-Ferrand pour la 5e édition du festival & ESPERLUETA & !
          </p>
          <p>
            Point d’orgue le samedi 21 mars avec un grand bal à la Maison du
            Peuple !
          </p>
          <p>
            Dans ce cadre, nous sommes à la recherche d’une association
            étudiante qui souhaiterait rejoindre l’aventure inter-associative,
            en compagnie des structures déjà co-organisatrices (Clermont Folk,
            LieU’topie, AFPS) aux côtés des Brayauds-CDMDT63. L’occasion de
            prendre part à une belle aventure humaine et culturelle, riche
            d’expériences et de partages. N’hésitez pas à nous contacter
            (contact@brayauds.fr), toutes les bonnes volontés sont les
            bienvenues !
          </p>
          <img src={savedTheDateImg} />

          <h2 id="presentation">Présentation</h2>
          <p>
            Le printemps arrive et le festival Esperlueta s’invite pour sa
            quatrième édition à Clermont-Ferrand !
          </p>
          <p>
            Le nom de l’événement, Esperlueta est la traduction en occitan
            auvergnat du mot « esperluette », le signe que voici : &. Il est à
            l’image de ce projet, qui se veut axer depuis le début sur le
            tissage de liens avec le monde associatif clermontois. Ainsi, cette
            quatrième édition sera l’occasion de travailler -pour la troisième
            année consécutive- avec deux associations étudiantes : Lie’Utopie et
            le BDE Ardus, Bureau des Étudiant·e·s Arts du Spectacle de
            l’université Clermont Auvergne, auxquelles s’ajouteront Clermont
            Folk et l’AFPS 63 : Association France Palestine Solidarité (antenne
            du Puy-de-Dôme).
          </p>
          <p>
            Amoureux·ses et curieux·ses des musiques et danses trad pourront se
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
          <p>
            L'Association France Palestine Solidarité est une association loi de
            1901 fondée en 2001 qui se décline en groupes locaux comme l’AFPS
            63.Elle défend les droits du peuple palestinien et promeut une paix
            durable entre Palestiniens et Israéliens, fondée sur le respect du
            droit international. Elle œuvre en France pour informer le public,
            mène des actions de sensibilisation, organise des événements et des
            campagnes de solidarité, et collabore avec d'autres organisations en
            France et à l'international. Elle est également engagée dans des
            projets de coopération sur le terrain en Palestine.
          </p>
        </VisibleComponent>
      </div>
    </VisibleComponent>
  )
}

export default Presentation
