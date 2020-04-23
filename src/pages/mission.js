import React from "react"

import WaveUpRight from "@images/waves/wave-up-right.svg"
import WomanWithPhone from "@images/mission-walking-phone.svg"

import { group } from "@utils/array"
import content from "@content/mission-content"
import Enter from "@components/enter"

const { valueProps } = content

const Mission = () => {
  return (
    <div className="page mission">
      <div className="bg--royal-blue">
        <div className="container--small pb70--sm pb30">
          <div className="row flex-col-r--sm">
            <div className="pl50--lg col-7 flex-col center--sm color--white">
              <h1>
                Big security. Small tech.
                <br />A solution custom-built to protect both you and your civil
                liberties.
              </h1>
            </div>
            <div className="col-5 mt50--neg--sm mb30--sm ml10--neg--sm mb20--sm">
              <WomanWithPhone className="mt20--lg mb20--sm ml50--lg w350 w300--sm" />
            </div>
          </div>
        </div>
      </div>

      <WaveUpRight className="fill--royal-blue bg--transparent flip-v mb10--neg" />

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
                  <Enter delay={index * 150}>
                    <div
                      key={index}
                      className={`${
                        odd ? "bg--off-white--sm" : ""
                      } bg--transparent w100p pv80`}
                    >
                      <div
                        className={`container--narrow center--sm color--black`}
                      >
                        {bullet.image ? (
                          <bullet.image className="mb30 w100p" />
                        ) : null}
                        <h3 className="color--dark-purple pb20">
                          {bullet.title}
                        </h3>
                        <p>{bullet.text}</p>
                      </div>
                    </div>
                  </Enter>
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
