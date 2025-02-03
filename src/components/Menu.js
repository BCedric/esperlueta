import React from 'react'
import esperluet from '../& (300 x 300 px).png'
import MenuItem from './MenuItem'

const Menu = ({ isHeaderVisible, hide }) => {
  const links = {
    presentation: {
      label: 'Présentation'
    },
    programmation: {
      label: 'Programmation'
    },
    // 'infos-pratiques': {
    //   label: 'Infos pratiques'
    // },
    'tarifs-reservation': {
      label: 'Tarifs & réservation'
    },
    contact: {
      label: 'Contact'
    },
    // partenaires: {
    //   label: 'Partenaires'
    // }
  }

  return (
    <nav
      className={`menu ${!isHeaderVisible ? 'fixed' : ''} ${
        hide ? 'hide' : ''
      }`}
    >
      <img
        className="esperluet"
        src={esperluet}
        alt="&-rouge"
        height="auto"
        width="auto"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      />
      <ul>
        {Object.keys(links).map((key) => (
          <MenuItem key={key} options={links[key]} name={key} />
        ))}
      </ul>
    </nav>
  )
}

export default Menu
