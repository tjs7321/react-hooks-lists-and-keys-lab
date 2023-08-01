import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksComps = links.map((link) => {
    return <a key={link} href={'#' + link}>{link}</a>
  })

  return <nav>{linksComps}</nav>;
}

export default NavBar;
