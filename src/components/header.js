import React from "react"
import { Link } from "gatsby"

import Logo from "@images/logo-white.svg"
import Hamburger from "@images/icons/hamburger.svg"
import Button from "./button"

const Header = ({ siteTitle, menuItems, menuState, setMenuState }) => (
  <header className="site-header bg--royal-blue h100 flex flex-al--c">
    <div className="container--large flex flex-ai--c flex-jc--sb color--off-white">
      <div className="site-header__left flex flex-jc--fs flex-ai--c">
        <Logo />
        <h4 className="ml15">
          <Link to="/">{siteTitle}</Link>
        </h4>
      </div>
      <div className="flex flex-jc--fe flex-ai--c hidden-sm link-menu">
        {menuItems.map((item, ind) => (
          <h6 className={ind === 0 ? "" : "ml40"} key={ind}>
            {ind === menuItems.length - 1 ? (
              <Button type="off-white" to={item.to}>
                {item.text}
              </Button>
            ) : (
              <Link to={item.to} activeClassName="active">
                {item.text}
              </Link>
            )}
          </h6>
        ))}
      </div>
      <div className="hidden-lg">
        <Hamburger
          height={36}
          className="cursor-pointer"
          onClick={() => {
            setMenuState(menuState.includes("open") ? "closing" : "opening")
          }}
        />
      </div>
    </div>
  </header>
)

export default Header
