import React, { useState, useEffect } from "react"
import Sensor from "react-visibility-sensor"

import "./index.scss"

const Enter = ({
  children: child, // Only pass one child
  rerender = false, // Whether to re-animate once the element comes *back* into view
  delay = 0, // Ms by which to delay the animation after element enters view
  sensorOptions = { partialVisibility: true }, // Props to pass to visibility sensor (https://github.com/joshwnj/react-visibility-sensor#props)
  animationClass = "fade-in-and-up", // Class applied to element. `${classname}--visible` will be applied when it is visible
}) => {
  // The idea here is to start all content visible, immediately set it invisible, and then animate it in when it enters view.
  // We start visible (eg when isLoaded is false), so that no-JS browsers/crawlers have visible content.
  const [isLoaded, setLoaded] = useState(false)
  const [isRendered, setRendered] = useState(false)
  const [readyToRender, setReadyToRender] = useState(!delay)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Sensor {...sensorOptions}>
      {({ isVisible }) => {
        if (isVisible && !rerender) {
          // Block re-animation unless rerender is tru
          setRendered(true)

          // If a delay is set, only render once it's expired after viewing
          if (delay) {
            setTimeout(() => {
              setReadyToRender(true)
            }, delay)
          }
        }

        const showMe = isLoaded
          ? (isVisible || isRendered) && readyToRender
          : true

        return React.cloneElement(child, {
          className: `${child.props.className || ""} ${animationClass} ${
            showMe ? `${animationClass}--visible` : ""
          }`,
        })
      }}
    </Sensor>
  )
}

export default Enter
