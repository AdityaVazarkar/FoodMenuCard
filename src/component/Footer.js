import React from "react";
import "../css/footer.css";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "" }}>
      {/* <header>
        <h2>
          Responsive <span>Footer</span>{" "}
        </h2>
      </header> */}
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3 className="">
            JayHomeMede
            Biryani
          </h3>

          <p class="footer-links">
            <div>
              <h1>Menu</h1>
              <div>
                <h2>Sukha / Fry / Kheema</h2>
              </div>
              <div>
                <h2>Rassa / Masala</h2>
              </div>
              <div>
                <h2>Biryani</h2>
              </div>
              <div>
                <h2>Chapati / Bhakari</h2>
              </div>
            </div>
          </p>

          <p class="footer-company-name">
            Copyright © 2023<strong>Jay Home Made Biryani</strong> All rights
            reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>

            <p>
              Address
              <br />
              <p>BHAGYASHREE GARDEN SOCIETY</p>
              <br />
              SURVEYNO.10, ROW house, Dhankawadi,
               Pune 
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <div>
              <p>+91 8669055430</p>
              <br />
              <p>+91 8669061397</p>
            </div>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p className="sm:w-48">
              <a  href="mailto:Jayhomecookedbiryani@gmail.com">
                Jayhomecookedbiryani
                @gmail.com
              </a>
            </p>
          </div>
        </div>
        {/* <div></div> */}
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            <strong>Jay Home Made Biryani</strong>

            <p>
              We are a leading Biryani brand in Pune serving delicious CKP style
              food for the last two decades.
            </p>
          </p>
          <div class="footer-icons">
            <h1>Working time</h1>
            <div>9am to 10pm</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
