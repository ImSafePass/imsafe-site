import React from "react"

import RightArrow from "@images/icons/right-arrow.svg"

import Button from "./button"

const Alternators = ({
  alternators,
  headerColor = "color--dark-purple",
  textColor = "color--black",
}) => (
  <>
    {alternators.map(
      (
        {
          title,
          content,
          img: { src, className },
          button = { text: "Learn more", to: "/solution" },
        },
        ind
      ) => {
        const first = ind === 0
        const last = ind === alternators.length - 1
        const odd = ind % 2 !== 0

        const { text, to } = button

        return (
          <div
            className={`row ${first ? "" : "mt100"} ${last ? "pb100" : ""} ${
              odd ? "flex-row-r flex-col--sm" : ""
            }`}
            key={title}
          >
            <div className="col-6 relative mb40--sm">
              <img
                alt={title}
                src={src}
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
              <Button
                to={to}
                type="transparent,icon"
                className="flex-jc--c--sm hidden"
              >
                <h4>{text}</h4>
                <RightArrow />
              </Button>
            </div>
          </div>
        )
      }
    )}
  </>
)

export default Alternators
