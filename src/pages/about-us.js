import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Markdown from "react-markdown"

import content from "@content/about-content"
import { useAssets } from "@utils/getAssets"
import LinkedinIcon from "@images/icons/linkedin.svg"

const AboutUs = () => {
  const assets = useAssets()
  const { allImageSharp } = useStaticQuery(graphql`
    query AboutQuery {
      allImageSharp(filter: {}) {
        nodes {
          resize(jpegProgressive: true, height: 500) {
            src
            originalName
          }
        }
      }
    }
  `)

  const images = allImageSharp.nodes.reduce(
    (obj, n) => ({
      ...obj,
      [n.resize.originalName.split(".")[0]]: n.resize.src,
    }),
    {}
  )

  return (
    <div className="page about">
      <div className="bg--royal-blue">
        <div className="container--small pb30--lg">
          <div className="row flex-col-r--sm pv10">
            <div className="pl40--lg col-7 flex-col center--sm color--white">
              <h1>{content.hero.title}</h1>
            </div>
            <div className="col-5 mt50--neg--sm ml10--neg--sm mb20--sm">
              <content.hero.image className="mb20--sm ml30--lg w500 w350--sm" />
            </div>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={assets.waveUpRightBlue}
        className="w101p bg--royal-blue bg--transparent flip-v mb10--neg"
      />

      <div className="bg--white">
        <div className="container--only-lg pb100--lg pt50--lg">
          <div className="row flex-col--sm flex-ai--fs">
            <div className="col-6 flex-col flex-jc--fs flex">
              <div className="our-story container--narrow">
                <h2 className="color--dark-purple mb30">Our story</h2>
                {content.ourStory.map((t, i) => (
                  <p key={i}>
                    {t}
                    <br />
                  </p>
                ))}
              </div>
              <div className="get-involved mt50 container--narrow pb60--sm">
                <h2 className="color--dark-purple mb30">Get involved</h2>
                <p>
                  We’re eager to continue refining, validating, and evangelizing
                  our approach. If you believe your expertise is a good fit for
                  what we are building, please{" "}
                  <Link className="color--dark-purple bold" to="/contact-us/">
                    contact us.
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-6 pl80--lg flex-col flex-jc--fs bg--off-white--sm flex-ai--c--sm">
              <div className="our-team container--narrow pv60--sm flex-ai--c--sm flex flex-col">
                <h2 className="color--dark-purple mb30">Our team</h2>
                {content.team.map((member, ind) => (
                  <div
                    className="member flex flex-row flex-jc--sb flex-ai--fs flex-col--sm flex-ai--c--sm mb20 mb40--sm"
                    key={ind}
                  >
                    <img
                      src={images[member.imageName]}
                      className="about-image mr10 ml15"
                      alt={member.name}
                    />
                    <div className="flex-col flex-jc--fs pl20--lg">
                      <div className="flex flex-row flex-col--sm flex-ai--c--sm mt20--sm">
                        <a
                          className="color--royal-blue flex flex-row flex-jc--fs flex-ai--c"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3>{member.name}</h3>
                          <LinkedinIcon
                            className="fill--royal-blue ml15"
                            style={{ marginTop: -1 }}
                          ></LinkedinIcon>
                        </a>
                      </div>
                      <Markdown className="markdown" source={member.bio} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="container--narow pv60 pt0--sm">
                <h2 className="color--dark-purple mb30">Special thanks</h2>
                <p>
                  ImSafe is a team effort, and we want to thank the following
                  volunteers for their indispensable work:
                </p>
                <ul>
                  {content.volunteers.map(v => (
                    <li key={v.name}>
                      <Link
                        to={v.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {v.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
