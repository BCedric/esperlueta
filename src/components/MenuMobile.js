import React, { useEffect, useRef } from 'react'
import esperluet from '../Chardon et esperluette.png'
import MenuItem from './MenuItem'

const MenuMobile = ({ isHeaderVisible, hide }) => {
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
    partenaires: {
      label: 'Partenaires'
    }
  }

  const ref = useRef()

  const handleClickHide = () => {
    ref.current.className += ' hide'
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !ref.current.className.includes('hide')
      ) {
        handleClickHide()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const handleClickDisplay = () => {
    ref.current.className = ref.current.className.replace(' hide', '')
  }

  return (
    <>
      <div
        className={`nav-bar nav-bar-mobile ${!isHeaderVisible ? 'fixed' : ''} ${
          hide ? 'hide' : ''
        }`}
      >
        <span className="material-icons" onClick={handleClickDisplay}>
          menu
        </span>
      </div>
      <nav ref={ref} id="menu-mobile" className={`menu-mobile hide`}>
        <div className="hide-content" onClick={handleClickHide}>
          <span className="material-icons">arrow_back</span>
        </div>
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
            <MenuItem
              key={key}
              name={key}
              onClick={handleClickHide}
              options={links[key]}
            />
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MenuMobile
