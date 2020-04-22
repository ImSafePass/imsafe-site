import React from "react"

import WaveUpRight from "@images/waves/wave-up-right.svg"
import ManWithPhone from "@images/solution-man-phone.svg"
import RightArrow from "@images/icons/right-arrow.svg"

import content from "@content/solution-content"

const { hero, sections } = content

const Solution = () => {
  return (
    <div className="page solution">
      <div className="bg--royal-blue pt50--lg">
        <div className="container--small pb70">
          <div className="row flex-col-r--sm">
            <div className="pl50--lg col-6 flex-col center--sm color--white">
              <h1>{hero.title}</h1>
              <h5>{hero.subtitle}</h5>
            </div>
            <div className="col-6 mt120--neg--sm mb30--neg--sm ml10--neg--sm mb20--sm">
              <ManWithPhone className="mt20--lg mb20--sm mh20--lg w400 w350--sm" />
            </div>
          </div>
        </div>
      </div>

      <WaveUpRight className="fill--royal-blue flip-v bg--transparent" />

      <div className="container--only-lg mt50--neg--sm">
        <div className="row flex-ai--fs flex-ai--c--sm">
          {sections.map((section, index) => {
            const odd = index % 2 !== 0
            return (
              <div
                className={`${
                  odd ? "bg--off-white--sm" : ""
                } bg--transparent w100p pt130 pb150 pv50--sm`}
              >
                <div className={`container--narrow center--sm color--black`}>
                  <h2 className="color--dark-purple pb20">{section.title}</h2>
                  {section.text.split("\n").map((t, i) => (
                    <p className="font-p2" key={i}>
                      {t}
                    </p>
                  ))}

                  {section.cta && section.cta.live ? (
                    <a className="mt40 flex flex-col flex-ai--c--sm" href="#">
                      <h4>{section.cta.title}</h4>
                      <p className="font-p2">{section.cta.text}</p>
                      <RightArrow className="fill--dark-purple" />
                    </a>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Solution
