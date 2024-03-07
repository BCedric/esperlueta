import React, { useRef } from 'react'
import useOnScreen from '../shared/hooks/useOnScreen'

const Element = ({ index }) => {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)
  return (
    <div>
      <p
        id={`element-${index}`}
        className={`element ${isVisible ? 'is-visible' : ''}`}
        ref={ref}
      >
        {index}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
        interdum orci. Etiam vestibulum augue nisi, non blandit lorem luctus ut.
        Proin nec convallis arcu, maximus vehicula sem. Nunc venenatis sem
        gravida, mattis nisi ut, interdum lorem. Ut nec congue augue, et
        hendrerit est. Praesent ante massa, vulputate sed nisi ut, volutpat
        scelerisque massa. Quisque pulvinar risus id leo auctor porta. Sed eu
        purus id enim pretium varius et nec erat. Maecenas diam risus, bibendum
        quis mi a, sagittis faucibus arcu. Donec justo ante, molestie in urna
        in, ullamcorper interdum nibh. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Praesent euismod
        sem porta lorem semper faucibus. Vivamus dignissim non nunc nec finibus.
        Nunc imperdiet leo vitae ipsum interdum tincidunt. Duis sit amet
        pharetra eros, et feugiat ante.
      </p>
    </div>
  )
}

export default Element
