import React from "react";
import "../page_styles/Contact.css";

function Contact() {
  return (
    <section id="footer">
      <div
        className="container wow fadeInUp"
        data-wow-delay="0.4s"
        data-wow-duration="1.5s"
      >
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <h3>Get In Touch With Us!</h3>
            <hr align="left" width="50%" />
            <p>
              This company was founded by Walter Marikwa who is the Ceo of
              Instrument2.0.
            </p>
            <p>
              &#169;Instrument<span style={{ color: "gold" }}>2.0</span> by
              Walter Marikwa 2019
            </p>
            <p>Last Updated August 2019.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="http://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.snapchat.com/">
                  <i className="fab fa-snapchat"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="contact-form">
                <form action="contact">
                  First name:
                  <br />
                  <input type="text" name="firstname" value="" required />
                  <br />
                  Last name:
                  <br />
                  <input type="text" name="lastname" value="" required />
                  <br />
                  Email:
                  <br />
                  <input type="text" name="email" value="" required />
                  <br />
                  <br />
                  <textarea
                    name="Leave a comment..."
                    id="text"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <br />
                  <br />
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
