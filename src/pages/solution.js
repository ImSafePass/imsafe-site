import React from "react"

import WaveUpRight from "@images/waves/wave-up-right.svg"
import ManWithPhone from "@images/solution-man-phone.svg"
import RightArrow from "@images/icons/right-arrow.svg"
import HowItWorks from "@images/solution-how-it-works.svg"
import content from "@content/solution-content"
import Enter from "@components/enter"

const { hero, sections } = content

const Solution = () => {
  return (
    <div className="page solution">
      <div className="bg--royal-blue">
        <div className="container--small pb70--sm pb30">
          <div className="row flex-col-r--sm">
            <div className="pl50--lg col-7 flex-col center--sm color--white">
              <h1>{hero.title}</h1>
            </div>
            <div className="col-5 mt120--neg--sm mb30--neg--sm ml10--neg--sm mb20--sm">
              <ManWithPhone className="mb20--sm w400 w350--sm" />
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
              <Enter delay={index * 150}>
                <div
                  className={`${
                    odd ? "bg--off-white--sm" : ""
                  } bg--transparent w100p pv80`}
                >
                  <div className={`container--narrow center--sm color--black`}>
                    {section.image ? (
                      <section.image className="mb30 w100p" />
                    ) : null}
                    <h2 className="color--dark-purple pb20">{section.title}</h2>
                    {section.text.split("\n").map((t, i) => (
                      <p className="font-p2" key={i}>
                        {t}
                      </p>
                    ))}

                    {section.cta && section.cta.dest ? (
                      <a
                        className="mt40 flex flex-col flex-ai--c--sm"
                        href={section.cta.dest}
                      >
                        <h4>{section.cta.title}</h4>
                        <p className="font-p2">{section.cta.text}</p>
                        <RightArrow className="fill--dark-purple" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Enter>
            )
          })}
        </div>
      </div>

      <Enter>
        <div className="bg--off-white pt50">
          <div className="container--narow">
            <h2 className="mb50 color--dark-purple center--sm">How it works</h2>
          </div>
          <HowItWorks
            className="mb50 mt200--neg--sm mb150--neg--sm"
            style={{ width: "120%", marginLeft: "-10%" }}
          />
        </div>
      </Enter>
    </div>
  )
}

export default Solution
