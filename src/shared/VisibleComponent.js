import React, { useRef } from 'react'
import useOnScreen from './hooks/useOnScreen'

const VisibleComponent = ({ children, className }) => {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)
  return (
    <div className={`element ${isVisible ? 'is-visible' : ''} ${className}`} ref={ref}>
      {children}
    </div>
  )
}
export default VisibleComponent
