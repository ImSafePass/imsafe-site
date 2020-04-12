import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div
      className="flex flex-col flex-jc--c flex-ai--c bg--royal-blue relative"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div className="flex flex-col flex-jc--c flex-ai--c color--white">
        <h1 className="mb30 mt50--neg">Not Found</h1>
        <h4 className="mb20">You just hit a route that doesn't exist.</h4>
        <h4>
          <Link to="/"> Return home.</Link>
        </h4>
      </div>
    </div>
  </>
)

export default NotFoundPage
