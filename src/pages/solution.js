import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Alternators from "@components/alternators"
import { getAssets } from "@utils/getAssets"

const alternators = ({ assets, shortTitle }) => [
  {
    img: {
      src: assets.walkingPhone,
      className: "ml10 ml0--sm w350 w250--sm",
    },
    title: "A combined measure that goes beyond a single test",
    content: `As laboratory and at-home tests become more broadly available, both antibody and active infection tests will provide critical information, but not the whole picture. It takes more than a single test to determine an individual’s immunity to Covid-19, or for that matter, that they are virus-free.\nEven in ideal circumstances, the margin of error is too great for any one to be safely deemed decisive. We combine and analyze multiple tests and broader community data points to arrive at a single, high-confidence score that is easy to understand and communicate.`,
  },
  {
    img: {
      src: assets.newNormalIll,
      className: "w450 w300--sm",
    },
    title: `A safe, secure way to share on your own terms`,
    content: `It’s paramount to us that individuals always remain in control of their personal information. The ImSafe Pass will feature consent-only sharing, authorized by two-factor authentication.  Any shared records will be verifiable by a unique QR coded link to timestamped decrypted value.`,
  },
  // {
  //   img: {
  //     src: assets.institutionsIll,
  //     className: "ml10 ml0--sm w365 w250--sm",
  //   },
  //   title: `A vital institution built for trust`,
  //   content: `Everyday people don’t trust large institutions with their data—not governments and not big tech. We founded ${shortTitle} to solve this urgent problem without sacrificing an inch of privacy, individual control, and civil liberty.  Your personal records are encrypted at rest and in transit, separated from identifying information, and only shared with your explicit approval and consent.`,
  // },
]

const Solution = () => {
  const { site, allFile } = useStaticQuery(graphql`
    query SolutionsQuery {
      site {
        siteMetadata {
          description
          title
          shortTitle
          heroDescription
        }
      }
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
          <div className="pl50--lg col-6 flex-col">
            <h1>
              A secure, private, digital immune record that gets us to a new
              normal faster
            </h1>
            <h5>
              Gain confidence in your risk profile. Build trust through
              voluntary sharing.
            </h5>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <img
              alt="Illustration of doctor with clipboard"
              src={assets.walkingPhone}
              className="mt20 mh20 mr0--sm ml40--sm w325 w250--sm"
            />
          </div>
        </div>
      </div>

      <img
        src={assets.offWhiteWave}
        alt=""
        className="bg--transparent w100p pt40--sm"
        style={{ marginTop: "5vw" }}
      />

      <div className="bg--gradient--off-white-white mt5--neg">
        <div className="container--small pt80">
          <Alternators alternators={alternators({ assets })} />
        </div>
      </div>
    </div>
  )
}

export default Solution
