import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { getAssets } from "@utils/getAssets"

import WaveUpRight from "@images/waves/wave-up-right.svg"
import content from "@content/solution-content"

const { hero, sections } = content

const Solution = () => {
  const { allFile } = useStaticQuery(graphql`
    query SolutionsQuery {
      allFile {
        nodes {
          publicURL
          relativeDirectory
          name
        }
      }
    }
  `)

  const assets = getAssets(allFile)
  return (
    <div className="page solution">
      <div className="container bg--white pb70">
        <div className="row">
          <div className="col-4 mt50--neg--sm ml10--neg--sm mb40--sm">
            <img
              alt="Illustration of doctor with clipboard"
              src={assets[hero.imgSrc]}
              className="mt20--lg mb20--sm mh20--lg w325 w300--sm"
            />
          </div>
          <div className="pl50--lg col-8 flex-col center--sm">
            <h1>{hero.title}</h1>
            <h5>{hero.subtitle}</h5>
          </div>
        </div>
      </div>

      <WaveUpRight className="fill--off-white bg--transparent" />

      {sections.map((section, index) => {
        const even = index % 2 === 0
        return (
          <>
            {even ? (
              index === 0 ? null : (
                <WaveUpRight className="fill--off-white bg--transparent" />
              )
            ) : (
              <WaveUpRight className="fill--white bg--off-white flip-h" />
            )}
            <div
              className={`${
                even ? "bg--off-white" : "bg--white"
              } pt130 pb150 pv50--sm mt5--neg`}
            >
              <div
                className={`container--narrow center--sm ${
                  even ? "color--black" : "color--black"
                }`}
              >
                <h2 className="color--dark-purple">{section.title}</h2>
                <p className="font-p2">{section.text}</p>
                {section.cta ? (
                  <div className="mt40">
                    <h4>{section.cta.title}</h4>
                    <p className="font-p2">{section.cta.text}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Solution
