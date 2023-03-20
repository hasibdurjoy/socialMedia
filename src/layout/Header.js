import Link from "next/link";
import { Fragment, useEffect } from "react";
import useWindowSize from "../useWindowSize";
import { stickyNav } from "../utils";
import MobileMenu from "./MobileMenu";

const Header = ({ header, singleMenus }) => {
  useEffect(() => {
    stickyNav({ singleMenus });
  }, []);
  const { width } = useWindowSize();
  useEffect(() => {
    const headers = document.querySelectorAll(".header-navigation");
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add("breakpoint-on");
      } else {
        header.classList.remove("breakpoint-on");
      }
      // toggle
      const toggleBtn = header.getElementsByClassName("navbar-toggler")[0],
        overlay = header.getElementsByClassName("nav-overlay")[0],
        menu = header.getElementsByClassName("nav-menu")[0];
      toggleBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        menu.classList.add("menu-on");
      });
      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        menu.classList.remove("menu-on");
      });
    });
  }, [width]);

  switch (header) {
    case 1:
      return <DefaultHeader singleMenus={singleMenus} />;
    case 2:
      return <Header2 singleMenus={singleMenus} />;
    case 3:
      return <Header3 singleMenus={singleMenus} />;
    case 4:
      return <Header4 singleMenus={singleMenus} />;
    case 5:
      return <Header5 singleMenus={singleMenus} />;
    default:
      return <DefaultHeader singleMenus={singleMenus} />;
  }
};
export default Header;

const DefaultHeader = ({ singleMenus }) => (
  <header className="header-area transparent-header">
    {/*=== Header Top-bar ===*/}
    <div className="topbar-one bg-color-one">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            <div className="top-left">
              <span className="text">
                <i className="far fa-envelope" /> Email Us :{" "}
                <span>
                  <a href="mailto:support@socialmediaotc.com">
                    support@socialmediaotc.com
                  </a>
                </span>
              </span>
              <span className="text">
                <i className="far fa-clock" /> Working Hours :
                <span>Monday - Friday, 09 am - 10 pm</span>
              </span>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-12">
            <div className="top-right float-lg-right">
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    {/*=== Header Navigation ===*/}
    <div className="header-navigation navigation-one navigation-white">
      <div className="nav-overlay" />
      <div className="container-fluid">
        {/*=== Primary Menu ===*/}
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding">
            <Link legacyBehavior href="/">
              <a className="brand-logo default-logo">
                <img
                  src="assets/images/logo/Social-media-OTC-White.png"
                  alt="Site Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="brand-logo default-sticky-logo">
                <img
                  src="assets/images/logo/Social-media-OTC-White.png"
                  alt="Site Logo"
                />
              </a>
            </Link>
          </div>
          {/*=== Nav Inner Menu ===*/}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/Social-media-OTC-White.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*=== Main Menu ===*/}
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <Fragment>
                  <Menus />
                  <MobileMenu />
                </Fragment>
              )}

              {/*=== Navbar Menu Button ===*/}
              <div className="menu-button pt-30">
                <Link
                  className="main-btn btn-red"
                  href="https://t.me/socialmediaotc"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Get Consultation
                </Link>
              </div>
            </div>
            {/*=== Nav right Item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="call-button">
                <span>
                  <i className="fas fa-headset" />
                  <a href="tel:+44 7477235306">+44 7477235306</a>
                </span>
              </div>
              <div className="menu-button">
                <Link
                  className="main-btn btn-red"
                  href="https://t.me/socialmediaotc"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Get Consultation
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header2 = ({ singleMenus }) => (
  <header className="header-area">
    {/*=== Header Top-bar ===*/}
    <div className="topbar-two">
      <div className="container-1420">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="top-left">
              <span className="text">
                <i className="far fa-envelope" /> Email Us :{" "}
                <span>
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </span>
              </span>
              <span className="text">
                <i className="far fa-clock" /> Working Hours :
                <span>Monday - Friday, 08 am - 05 pm</span>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3">
            <div className="top-right float-lg-right d-flex align-items-center">
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
              <div className="lang-dropdown">
                <select className="">
                  <option value={1}>English</option>
                  <option value={2}>Russian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=== Header Navigation ===*/}
    <div className="header-navigation navigation-default">
      <div className="nav-overlay" />
      <div className="container-1420">
        {/*=== Primary Menu ===*/}
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding">
            <Link legacyBehavior href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/logo-2.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          {/*=== Nav Inner Menu ===*/}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-2.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <Fragment>
                  <Menus />
                  <MobileMenu />
                </Fragment>
              )}
              <div className="menu-button pt-30">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn btn-red">Consultation</a>
                </Link>
              </div>
            </div>
          </div>
          {/*=== Nav right item ===*/}
          <div className="nav-right-item d-flex align-items-center">
            <div className="menu-button">
              <Link legacyBehavior href="/contact">
                <a className="main-btn btn-red">Consultation</a>
              </Link>
            </div>
            <div className="navbar-toggler">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header3 = ({ singleMenus }) => (
  <header className="header-area transparent-header">
    {/*=== Header Navigation ===*/}
    <div className="header-navigation navigation-two navigation-white">
      <div className="nav-overlay" />
      <div className="container-fluid">
        {/*=== Primary Menu ===*/}
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding">
            <Link legacyBehavior href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/logo-3.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          {/*=== Nav Inner Menu ===*/}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-5.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <Fragment>
                  <Menus />
                  <MobileMenu />
                </Fragment>
              )}
              <div className="menu-button pt-30">
                <Link legacyBehavior href="/sign-in">
                  <a className="main-btn btn-blue">Log in</a>
                </Link>
              </div>
            </div>
            {/*=== Nav right item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="sign-in-button">
                <Link legacyBehavior href="/sign-up">
                  <a className="btn-link">Sign Up</a>
                </Link>
              </div>
              <div className="menu-button">
                <Link legacyBehavior href="/sign-in">
                  <a className="main-btn btn-blue">Log in</a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header4 = ({ singleMenus }) => (
  <header className="header-area transparent-header">
    {/*=== Header Navigation ===*/}
    <div className="header-navigation navigation-two">
      <div className="nav-overlay" />
      <div className="container-fluid">
        {/*=== Primary Menu ===*/}
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding">
            <Link legacyBehavior href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/logo-4.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          {/*=== Nav Menu ===*/}
          <div className="nav-menu">
            {/*=== Mobile Logo ===*/}
            <div className="mobile-logo mb-30 d-block d-xl-none text-center">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/logo-4.png" alt="Site Logo" />
                </a>
              </Link>
            </div>
            {/*=== Main Menu ===*/}
            {singleMenus ? (
              <SingleMenu menus={singleMenus} />
            ) : (
              <Fragment>
                <Menus />
                <MobileMenu />
              </Fragment>
            )}
          </div>
          {/*=== Nav right item ===*/}
          <div className="nav-right-item d-flex align-items-center">
            <div className="menu-button">
              <Link legacyBehavior href="/sign-in">
                <a className="main-btn btn-orange">Consultations</a>
              </Link>
            </div>
            <div className="navbar-toggler">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header5 = ({ singleMenus }) => (
  <header className="header-area">
    <div className="header-navigation navigation-three">
      <div className="nav-overlay" />
      <div className="container-fluid">
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding d-flex align-items-center">
            <Link legacyBehavior href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/logo-4.png" alt="Site Logo" />
              </a>
            </Link>
            <a href="tel:+000(123)45688" className="call-button">
              <i className="far fa-phone" />
              <span>+000 (123) 456 88</span>
            </a>
          </div>
          {/*=== Nav Inner Menu ===*/}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/default-sticky-logo.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*=== Main Menu ===*/}
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <Fragment>
                  <Menus />
                  <MobileMenu />
                </Fragment>
              )}
            </div>
            {/*=== Nav right Item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="menu-button">
                <Link
                  className="main-btn btn-red"
                  href="https://t.me/socialmediaotc"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Get Consultation
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Menus = () => (
  <Fragment>
    <nav className="main-menu d-none d-xl-block">
      <ul>
        <li className="menu-item">
          <Link href="/" className="active">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/#about">
            About
          </Link>
        </li>
        <li className="menu-item ">
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

const SingleMenu = ({ menus }) => {
  return (
    <Fragment>
      <nav className="main-menu">
        <ul>
          {menus.map((menu, i) => (
            <li className="menu-item" key={i}>
              <a href={`#${menu.href}`} className="page-scroll nav-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};
