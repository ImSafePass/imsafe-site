import React from "react"

import ManWithPhone from "@images/solution-man-phone.svg"
import RightArrow from "@images/icons/right-arrow.svg"
import HowItWorks from "@images/solution-how-it-works.svg"
import HowItWorksMobile from "@images/solution-how-it-works-mobile.svg"
import content from "@content/solution-content"
import Enter from "@components/enter"

import { useAssets } from "@utils/getAssets"
const { hero, sections } = content

const Solution = () => {
  const assets = useAssets()
  return (
    <div className="page solution">
      <div className="bg--royal-blue">
        <div
          className="container--small pb70--sm pb30 mt30--neg--lg mb20--neg--lg"
          style={{ zIndex: 1 }}
        >
          <div className="row flex-col-r--sm">
            <div className="pl50--lg col-7 flex-col center--sm color--white">
              <h1>{hero.title}</h1>
            </div>
            <div className="col-5 mt40--neg--sm mb30--neg--sm ml30--neg--sm mb20--sm">
              <ManWithPhone className="mb20--sm w400 w350--sm" />
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        style={{ zIndex: 0 }}
        src={assets.waveUpRightBlue}
        className="w101p bg--transparent flip-v mb10--neg"
      />

      <Enter>
        <div className="bg--white pt50">
          <div className="container--narow">
            <h2 className="mb50 color--dark-purple center--sm">How it works</h2>
          </div>
          <HowItWorks
            className="mb50 hidden-sm"
            style={{ width: "120%", marginLeft: "-10%" }}
          />
          <HowItWorksMobile
            className="hidden-lg"
            style={{ width: "120%", marginLeft: "-10%" }}
          />
        </div>
      </Enter>

      <div className="bg--of-white">
        <div className="container--only-lg mt50--neg--sm">
          <div className="row flex-ai--fs flex-ai--c--sm">
            {sections.map((section, index) => {
              const odd = index % 2 !== 0
              return (
                <Enter delay={index * 150}>
                  <div
                    className={`w100p pv80 pv60--sm ${
                      odd ? "bg--off-white--sm" : ""
                    }`}
                  >
                    <div
                      className={`container--narrow center--sm color--black`}
                    >
                      {section.image ? (
                        <section.image className="mb30 w100p" />
                      ) : null}
                      <h2 className="color--dark-purple pb20">
                        {section.title}
                      </h2>
                      {section.text.split("\n").map((t, i) => (
                        <p key={i}>{t}</p>
                      ))}

                      {section.cta && section.cta.dest ? (
                        <a
                          className="mt40 flex flex-col flex-ai--c--sm"
                          href={section.cta.dest}
                        >
                          <h4>{section.cta.title}</h4>
                          <p>{section.cta.text}</p>
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
      </div>
    </div>
  )
}

export default Solution
