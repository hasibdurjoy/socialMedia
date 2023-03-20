import Link from "next/link";
import { Fragment, useState } from "react";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <nav className="main-menu d-block d-xl-none">
        <ul>
          <li className="menu-item has-children">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="about">
              About
            </Link>
          </li>
          <li className="menu-item has-children">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default MobileMenu;
