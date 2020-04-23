import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import ShortArrowRight from "@images/icons/short-right-arrow.svg"
import ShortArrowLeft from "@images/icons/short-arrow-left.svg"

import Carousel from "@components/carousel"
import { getAssets } from "@utils/getAssets"
import SEO from "@components/seo"
import Button from "@components/button"
import Alternators from "@components/alternators"
import HomeSlide from "@components/home-slide"
import Enter from "@components/enter"

import content from "@content/home-content"

import "./home.scss"

const { hero, cta, sections, applications } = content

const IndexPage = () => {
  const { allFile } = useStaticQuery(graphql`
    query HomeQuery {
      allFile {
        nodes {
          publicURL
          relativeDirectory
          name
        }
      }
    }
  `)

  const [currentSlide, setCurrentSlide] = useState(0)
  const assets = getAssets(allFile)

  const slidePaddingLeft = 120
  const slideSize = 500
  const carouselSlides = applications.map(application => (
    <HomeSlide
      {...application}
      asset={assets[application.src]}
      key={application.title}
    />
  ))

  const slides = applications.map((application, ind) => (
    <HomeSlide
      {...application}
      asset={assets[application.src]}
      key={application.title}
      className={`w${slideSize} ${ind === 0 ? "" : `pl${slidePaddingLeft}`}`}
    />
  ))

  const horizontalScrollLength =
    slideSize * slides.length + slides.length * slidePaddingLeft

  const slideXTransform = (slideSize + slidePaddingLeft) * currentSlide

  return (
    <div className="home page">
      <SEO />
      <div className="bg--royal-blue">
        <div className="container--small mt80--neg--sm">
          <div className="row">
            <div className="col-4">
              <img
                alt={hero.title}
                src={assets[hero.imgSrc]}
                className="mt20 mh20 mr0--sm ml40--sm w325 w250--sm"
              />
            </div>
            <div className="flex-col col-8 color--white center--sm left row">
              <h1>{hero.title}</h1>
              <h5>{hero.subtitle}</h5>
            </div>
          </div>
        </div>
      </div>

      <img
        src={assets.waveDownLeft}
        alt=""
        className="bg--transparent w100p pt40--sm"
        style={{ marginTop: "-15vw" }}
      />

      <div className="bg--white">
        <div className="container--large">
          <div className="row color--dark-purple mv60 flex-jc--c mb30--sm">
            <h4 className="center--sm">{cta.text}</h4>
            <Button
              to={cta.dest}
              type="dark-purple"
              className="ml50--lg mv50--sm"
            >
              {cta.buttonText}
            </Button>
          </div>
        </div>
      </div>

      <div className="bg--gradient--off-white-white">
        <div className="container--small pt80">
          <Enter>
            <Alternators alternators={sections} />
          </Enter>
        </div>
      </div>

      <img
        alt=""
        src={assets.waveUpRight}
        className="bg--transparent w100p"
        style={{ marginBottom: "-5px" }}
      />

      <div className="row bg--gradient--off-white-white flex-col">
        <Enter>
          <div className="container--large pb100--sm">
            <div className="relative">
              <h4 className="color--dark-purple left mt20 mb20 flex-as--fs">
                Potential applications
              </h4>
              <Carousel className="hidden-lg">{carouselSlides}</Carousel>

              <div
                className="home__horizontal-scroll flex flex-row flex-jc--fs mb100 hidden-sm"
                style={{
                  minWidth: horizontalScrollLength,
                  transform: `translateX(-${slideXTransform}px)`,
                }}
              >
                {slides}
              </div>
              {currentSlide > 0 ? (
                <button
                  className="btn btn--royal-blue absolute hidden-sm carousel-nav"
                  style={{ bottom: 50, left: 50 }}
                  type="left-icon,royal-blue"
                  onClick={() => setCurrentSlide(currentSlide - 1)}
                >
                  <ShortArrowLeft />
                </button>
              ) : null}

              {/* Only show the button if we have more than two items left */}
              {currentSlide >= slides.length - 1 ? null : (
                <button
                  className="btn btn--royal-blue absolute hidden-sm carousel-nav"
                  style={{ bottom: 50, right: 50 }}
                  type="icon,royal-blue"
                  onClick={() => setCurrentSlide(currentSlide + 1)}
                >
                  <ShortArrowRight />
                </button>
              )}
            </div>
          </div>
        </Enter>
      </div>
    </div>
  )
}

export default IndexPage
