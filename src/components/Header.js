import React from 'react'

const Header = React.forwardRef((_, ref) => {
  return (
    <header ref={ref}>
      <div className="header-esperlueta">
        <span>Esperlueta</span>
      </div>
      {/* <img src={Esperlueta} alt="esperlueta" /> */}
    </header>
  )
})

export default Header
