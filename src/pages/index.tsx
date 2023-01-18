import React from "react";
import type { NextPage } from "next";
import { ChatBox } from "../components/ChatBox";
import Image from "next/image";
import logo from "../../public/logo.png";

const Home: NextPage = () => {
  return (
    <div>
      {/* <ChatBox /> */}
      <title>VitaStrong</title>

      <div>
        <nav
          className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
          id="templatemo_nav_top"
        >
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2"></i>
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
                <i className="fa fa-phone mx-2"></i>
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="tel:010-020-0340"
                >
                  010-020-0340
                </a>
              </div>
              <div>
                <a
                  className="text-light"
                  href="https://fb.com/templatemo"
                  rel="sponsored"
                >
                  <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                </a>
                <a
                  className="text-light"
                  href="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
                </a>
                <a
                  className="text-light"
                  href="https://twitter.com/"
                >
                  <i className="fab fa-twitter fa-sm fa-fw me-2"></i>
                </a>
                <a
                  className="text-light"
                  href="https://www.linkedin.com/"
                >
                  <i className="fab fa-linkedin fa-sm fa-fw"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="header-logo">
            <Image
              src={logo}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="container d-flex justify-content-between align-items-center">

            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="shop.html">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputMobileSearch"
                      placeholder="Search ..."
                    />
                    <div className="input-group-text">
                      <i className="fa fa-fw fa-search"></i>
                    </div>
                  </div>
                </div>
                <a
                  className="nav-icon d-none d-lg-inline"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#templatemo_search"
                >
                  <i className="fa fa-fw fa-search text-dark mr-2"></i>
                </a>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    7
                  </span>
                </a>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-user text-dark mr-3"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    +99
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="modal fade bg-white"
          id="templatemo_search"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              action=""
              method="get"
              className="modal-content modal-body border-0 p-0"
            >
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputModalSearch"
                  name="q"
                  placeholder="Search ..."
                />
                <button
                  type="submit"
                  className="input-group-text bg-success text-light"
                >
                  <i className="fa fa-fw fa-search text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          id="template-mo-zay-hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to="2"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last"></div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left align-self-center">
                      <h1 className="h1 text-success">
                        <b>Vita</b> Strong
                      </h1>
                      <h3 className="h2">Welcome to VitaStrong</h3>
                      <p>
                        Fill out the questionnaire before speaking with the
                        nutritionist to help us understand your starting point
                        and the goals you want to achieve:
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1">Proident occaecat</h1>
                      <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                      <p>
                        You are permitted to use this Zay CSS template for your
                        commercial websites. You are{" "}
                        <strong>not permitted</strong> to re-distribute the
                        template ZIP file in any kind of template collection
                        websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1">Repr in voluptate</h1>
                      <h3 className="h2">Ullamco laboris nisi ut </h3>
                      <p>
                        We bring you 100% free CSS templates for your websites.
                        If you wish to support TemplateMo, please make a small
                        contribution via PayPal or tell your friends about our
                        website. Thank you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                  VITASTRONG Shop
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    123 Consectetur at ligula 10660
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw"></i>
                    <a className="text-decoration-none" href="tel:010-020-0340">
                      010-020-0340
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw"></i>
                    <a
                      className="text-decoration-none"
                      href="mailto:info@company.com"
                    >
                      info@company.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Products
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Wear
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Further Info
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Shop Locations
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light"></div>
              </div>
              <div className="col-auto me-auto">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      href="http://facebook.com/"
                    >
                      <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoEmailration-none"
                      href="https://twitter.com/"
                    >
                      <i className="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      href="https://www.linkedin.com/"
                    >
                      <i className="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="subscribeEmail">
                  Email address
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control bg-dark border-light"
                    id="subscribeEmail"
                    placeholder="Email address"
                  />
                  <div className="input-group-text btn-success text-light">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
