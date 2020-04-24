import React from "react"

import WomanWithPhone from "@images/mission-walking-phone.svg"

import { group } from "@utils/array"
import content from "@content/mission-content"
import Enter from "@components/enter"
import { useAssets } from "@utils/getAssets"

const { valueProps } = content

const Mission = () => {
  const assets = useAssets()
  return (
    <div className="page mission">
      <div className="bg--royal-blue pt20">
        <div className="container--small pb40--sm">
          <div className="row flex-col-r--sm mt70--neg--lg">
            <div className="pl50--lg col-7 flex-col center--sm color--white">
              <h1>
                A solution custom-built to protect both you and your civil
                liberties.
              </h1>
            </div>
            <div className="col-5 pt20--lg mb20--sm ml10--neg--sm">
              <WomanWithPhone className="mt40--lg ml50--lg w275 w225--sm mv30--neg--sm" />
            </div>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={assets.waveUpRightBlue}
        className="w101p bg--transparent flip-v mt20--neg"
      />

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
                      } bg--transparent w100p pv80 pv60--sm`}
                    >
                      <div
                        className={`container--narrow center--sm color--black`}
                      >
                        {bullet.image && bullet.imageLocation !== "bottom" ? (
                          <bullet.image className="mb30 w100p" />
                        ) : null}
                        <h3 className="color--dark-purple pb20">
                          {bullet.title}
                        </h3>
                        <p>{bullet.text}</p>
                        {bullet.image && bullet.imageLocation === "bottom" ? (
                          <bullet.image className="mt30 w100p" />
                        ) : null}
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
