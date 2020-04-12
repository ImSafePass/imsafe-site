import React from "react"

import RightArrow from "@images/icons/right-arrow.svg"

import Button from "./button"

const Alternators = ({ alternators }) => (
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
              <h2 className="color--dark-purple pr100 pr0--sm">{title}</h2>
              <p className="mr20 mr0--sm">{content}</p>
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
