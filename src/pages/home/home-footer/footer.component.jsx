import React, { useState } from "react";

export const FooterComponent = () => {
  const [inputEmailFoucs, setInputEmailFocus] = useState(false);

  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4 className="h4-footer">About This Project</h4>
              <p>
                I'm work as Web Developer about 1 years and 2 months. This is my
                project for portfolio. It's not a commercial project. There I
                show how I can work with HTML & CSS & React stack.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4 className="h4-footer">Contact Me</h4>
              <p>Type in your e-mail for contact me</p>
              <div className="mc_embed_signup">
                <form className={"form-inline"}>
                  <input
                    className={"form-control"}
                    name="EMAIL"
                    placeholder={!inputEmailFoucs && "Enter E-mail"}
                    onFocus={() => setInputEmailFocus(true)}
                    onBlur={() => setInputEmailFocus(false)}
                    required
                    type={"email"}
                  />
                  <button className={"click-btn btn btn-default"}>
                    <i className={"fa fa-long-arrow-right"} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4 className="h4-footer">My Social</h4>
              <p>There's me in social</p>
              <div className="footer-social d-flex align-items-center">
                <a href={"https://twitter.com/G_ZHELYABIN"}>
                  <i className={"fa fa-twitter"} />
                </a>
                <a href={"https://github.com/gzhel"}>
                  <i className={"fa fa-github"} />
                </a>
                <a
                  href={
                    "https://www.linkedin.com/in/gregory-zhelyabin-4306651a4/"
                  }
                >
                  <i className={"fa fa-linkedin"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
