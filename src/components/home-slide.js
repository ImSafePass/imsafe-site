import React from "react"

import { roundTo } from "@utils/number"

export default ({ title, content, width, asset, className }) => (
  <div
    className={`flex flex-col pb40--sm flex-ai--c ${className || ""}`}
    key={title}
  >
    <div className={`h400--lg flex flex-col flex-jc--c h250--sm mt30--sm`}>
      <img className={`w${roundTo(width)}--lg`} alt={title} src={asset} />
    </div>
    <div className="flex flex-col h250--sm flex-ai--fs flex-ai--c--sm">
      <h4 className="color--dark-purple mb20--sm mt40--sm center">{title}</h4>
      <p>{content}</p>
    </div>
  </div>
)
