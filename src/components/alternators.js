import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import RightArrow from "@images/icons/right-arrow.svg"
import { getAssets } from "@utils/getAssets"

import Enter from "./enter"
import Button from "./button"

const Alternators = ({
  alternators,
  headerColor = "color--dark-purple",
  textColor = "color--black",
}) => {
  const { allFile } = useStaticQuery(graphql`
    query Alternators {
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
    <div>
      {alternators.map(
        (
          { title, content, img: { src, className }, linkText, linkDest },
          ind
        ) => {
          const first = ind === 0
          const last = ind === alternators.length - 1
          const odd = ind % 2 !== 0

          return (
            <Enter>
              <div
                className={`row ${first ? "" : "mt100"} ${
                  last ? "pb100" : ""
                } ${odd ? "flex-row-r flex-col--sm" : ""}`}
                key={title}
              >
                <div className="col-6 relative mb40--sm">
                  <img
                    alt={title}
                    src={assets[src]}
                    className={className}
                    style={{ zIndex: 1 }}
                  />
                  <div className="radial-blur-circle radial-blur-circle--right" />
                </div>
                <div className="col-6 flex flex-col center--sm left">
                  <h2 className={`${headerColor} pr100 pr0--sm`}>{title}</h2>
                  {content.split("\n").map((con, ind) => (
                    <p
                      key={con.slice(0, 10)}
                      className={`mr20 mr0--sm ${textColor} ${
                        ind !== 0 ? "mt5" : ""
                      }`}
                    >
                      {con}
                    </p>
                  ))}
                  {linkText && linkDest ? (
                    <Button
                      to={linkDest}
                      type="transparent,icon"
                      className="flex-jc--c--sm"
                    >
                      <h4>{linkText}</h4>
                      <RightArrow />
                    </Button>
                  ) : null}
                </div>
              </div>
            </Enter>
          )
        }
      )}
    </div>
  )
}

export default Alternators
