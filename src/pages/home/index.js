import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import ShortArrowRight from "@images/icons/short-right-arrow.svg"
import ShortArrowLeft from "@images/icons/short-arrow-left.svg"

import Carousel from "@components/carousel"
import { getAssets } from "@utils/getAssets"
import SEO from "@components/seo"
import Button from "@components/button"
import Alternators from "@components/alternators"

import carouselNodes from "@utils/carouselContent"
import homeAlternators from "@utils/homeAlternators"

import "./home.scss"

const IndexPage = () => {
  const { site, allFile } = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          description
          title
          shortTitle
          heroDescription
        }
      }
      allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          publicURL
          relativeDirectory
          name
        }
      }
    }
  `)

  const [
    horizontalScrollTransformPerc,
    setHorizontalScrollTransformPerc,
  ] = useState(0)
  const assets = getAssets(allFile)

  const { title, description, shortTitle, heroDescription } = site.siteMetadata
  const slides = carouselNodes({ title, shortTitle, assets })
  const slideSize = 500
  const horizontalScrollLength = slideSize * slides.length

  return (
    <div className="home page">
      <SEO title="Home" />
      <div className="bg--royal-blue">
        <div className="container--small mt80--neg--resp">
          <div className="row">
            <div className="col-4">
              <img
                alt="Illustration of doctor with clipboard"
                src={assets.heroIll}
                className="mt20 mh20 mr0--resp ml40--resp w325 w250--resp"
              />
            </div>
            <div className="flex-col col-8 color--white center--resp left row">
              <h1>{description}</h1>
              <h5>{heroDescription}</h5>
            </div>
          </div>
        </div>
      </div>

      <img
        src={assets.heroWave}
        alt=""
        className="bg--transparent w100p pt40--resp"
        style={{ marginTop: "-15vw" }}
      />

      <div className="bg--white">
        <div className="container--large">
          <div className="row color--dark-purple mv60 flex-jc--c mb30--resp">
            <h4 className="center--resp">
              We're looking for partners in healthcare, government, tech, and
              more.
            </h4>
            <Button
              to="/contact-us"
              type="dark-purple,large"
              className="mh50 mh0--resp mv50--resp w125--resp"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>

      <div className="bg--gradient--off-white-white">
        <div className="container--small pt80">
          <Alternators alternators={homeAlternators({ assets, title })} />
        </div>
      </div>

      <img
        alt=""
        src={assets.applicationsWave}
        className="bg--transparent w100p"
        style={{ marginBottom: "-5px" }}
      />

      <div className="row bg--off-white flex-col">
        <div className="container--large pb100--resp">
          <div className="relative">
            <h4 className="color--dark-purple left mt20 mb20 flex-as--fs">
              Potential applications
            </h4>
            <Carousel className="hidden-lg">{slides}</Carousel>
            <div
              className="home__horizontal-scroll flex flex-row flex-jc--fs mb100 hidden-sm"
              style={{
                minWidth: horizontalScrollLength,
                transform: `translateX(-${horizontalScrollTransformPerc}%)`,
              }}
            >
              {slides.map(child =>
                React.cloneElement(child, {
                  className: `w${slideSize}`,
                })
              )}
            </div>
            {horizontalScrollTransformPerc ? (
              <Button
                className="absolute hidden-sm carousel-nav"
                style={{ bottom: 50, left: 50 }}
                type="left-icon,royal-blue"
                onClick={() =>
                  setHorizontalScrollTransformPerc(
                    horizontalScrollTransformPerc - 100.0 / slides.length
                  )
                }
              >
                <ShortArrowLeft /> Less
              </Button>
            ) : null}

            {/* Only show the button if we have more than two items left */}
            {horizontalScrollTransformPerc >=
            (100 / slides.length) * (slides.length - 2) ? null : (
              <Button
                className="absolute hidden-sm carousel-nav"
                style={{ bottom: 50, right: 50 }}
                type="icon,royal-blue"
                onClick={() =>
                  setHorizontalScrollTransformPerc(
                    horizontalScrollTransformPerc + 100.0 / slides.length
                  )
                }
              >
                More <ShortArrowRight />
              </Button>
            )}
          </div>
        </div>

        <div className="container--large pb150 hidden-sm">
          <h4 className="left color--dark-purple">How it works</h4>
          <img
            src={assets.diagram}
            width="100%"
            alt="Diagram: Variety of data inputs (labs, wearables, etc) and variety of outputs (nursing homes, employers, etc)."
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
