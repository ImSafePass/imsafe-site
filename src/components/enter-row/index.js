import React, { useRef } from "react"

import Enter from "@components/enter"

/** Passed the wrapper for a list of elements broken into rows,
 * this component staggers them in, one row at a time, with the specified delay
 */
const EnterRow = ({
  children: parent, // Only pass one child - which has multiple children
  delay = 150,
  ...animateEntryProps
}) => {
  const ref = useRef(null)

  const delayByRow = (ref, children) => {
    const kids = Array.from(ref.current.children)
    const firstRowY = kids[0].getBoundingClientRect().y
    const rowLength =
      Math.max(
        kids.findIndex(k => k.getBoundingClientRect().y !== firstRowY),
        0
      ) || children.length

    return children.map((c, i) => (
      <Enter key={i} delay={(i % rowLength) * delay} {...animateEntryProps}>
        {c}
      </Enter>
    ))
  }

  const children =
    ref && ref.current
      ? delayByRow(ref, parent.props.children)
      : parent.props.children

  return React.cloneElement(parent, { children, ref })
}

export default EnterRow
