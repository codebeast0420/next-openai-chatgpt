import React from "react";

const Land = () => {
  return (
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
                    nutritionist to help us understand your starting point and
                    the goals you want to achieve:
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
                    commercial websites. You are <strong>not permitted</strong>{" "}
                    to re-distribute the template ZIP file in any kind of
                    template collection websites.
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
                    We bring you 100% free CSS templates for your websites. If
                    you wish to support TemplateMo, please make a small
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
  );
};

export default Land;