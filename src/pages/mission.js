import React from "react"

import WaveUpRight from "@images/waves/wave-up-right.svg"
import WomanWithPhone from "@images/mission-walking-phone.svg"
import RightArrow from "@images/icons/right-arrow.svg"

import { group } from "@utils/array"
import content from "@content/mission-content"

const { hero, valueProps, paragraph } = content

const Mission = () => {
  return (
    <div className="page solution">
      <div className="bg--off-white pt50--lg">
        <div className="container--small pb70">
          <div className="row flex-col-r--sm">
            <div className="pl50--lg col-6 flex-col center--sm">
              <h1>{hero.title}</h1>
              <h5>{hero.subtitle}</h5>
            </div>
            <div className="col-6 mt50--neg--sm mb30--sm ml10--neg--sm mb20--sm">
              <WomanWithPhone className="mt20--lg mb20--sm mh20--lg w400 w350--sm" />
            </div>
          </div>
        </div>
      </div>

      <WaveUpRight className="fill--off-white flip-v bg--transparent" />

      {group(valueProps.bullets, 3).map((group, groupIndex) => (
        <div
          className={`bg--transparent--sm ${
            groupIndex % 2 !== 0 ? "bg--off-white" : ""
          }`}
        >
          <div
            className={`container--only-lg  ${
              groupIndex === 0 ? "mt50--neg--sm" : ""
            }`}
          >
            <div className={`row flex-ai--fs flex-ai--c--sm`} key={groupIndex}>
              {group.map((bullet, index) => {
                const odd = (index + groupIndex) % 2 !== 0
                return (
                  <div
                    key={index}
                    className={`${
                      odd ? "bg--off-white--sm" : ""
                    } bg--transparent w100p pt130 pb150 pv80--sm`}
                  >
                    <div
                      className={`container--narrow center--sm color--black`}
                    >
                      <h2 className="color--dark-purple pb20">
                        {bullet.title}
                      </h2>
                      <p className="font-p2">{bullet.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Mission
