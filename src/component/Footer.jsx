import { NavLink } from "react-router-dom";
import "../component/Footer.css";
export default function Footer() {
  return (
    <>
    {/* design footer */}
      <div className="footer">
        <div className="otside-footer">
          <div className="abote-section">
            <h4 className="header-footer">Go Make Something Awesome </h4>
            <div className="header-row"></div>
            <div className="descrip-footer">
              This Ecommerce website is only learning purpose made and give your
              valuable feedback to inspire me.
            </div>
            <div className="descrip-footer-like">
              {" "}
              Made with{" "}
              <i class="fa-solid fa-heart fa-beat fa-xl"></i>
            </div>
          </div>
          <div className="aside-footer">
            <h4 className="header-footer">CONTACT</h4>{" "}
            <div className="header-row two"></div>
            <div>
              <span className="icon">
                <i className="fa-solid fa-house fa-lg"></i>
              </span>
              <span className="icon-descrip">Vijapur,Gujarat</span>
            </div>
            <div>
              <span className="icon">
                <i className="fa-solid fa-envelope fa-bounce fa-lg"></i>
              </span>
              <span className="icon-descrip">
                <a className="icon-link" href="mailto:abpatel1249@gmail.com">
                  abpatel1249@gmail.com
                </a>
              </span>
            </div>
            <div>
              <span className="icon">
                <i className="fa-solid fa-phone fa-shake fa-lg"></i>
              </span>
              <span className="icon-descrip">
                <a className="icon-link" href="tailto:+91 91732 58xxx">
                  +91 91732 58xxx
                </a>
              </span>
            </div>
            <div>
              <span className="icon">
                <i className="fa-solid fa-print fa-lg"></i>
              </span>
              <span className="icon-descrip">
                <a className="icon-link" href="tailto:+91 91732 58xxx">
                  +91 91732 58xxx
                </a>
              </span>
            </div>
          </div>
          <div className="social-media">
            <h4 className="header-footer">SOCIAL MEDIA</h4>{" "}
            <div className="header-row two"></div>
            <div className="icons">
              <span className="social-media-link">
                {" "}
                <NavLink to="https://github.com/Aryanpatel1066" target="_blank">
                  <i
                    className="fa-brands fa-github fa-fade fa-2xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </NavLink>{" "}
              </span>
              <span className="social-media-link">
                {" "}
                <NavLink to="https://discord.com/channels/@me" target="_blank">
                  <i
                    className="fa-brands fa-discord fa-fade fa-2xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </NavLink>{" "}
              </span>
              <span className="social-media-link">
                {" "}
                <NavLink
                  to="https://www.instagram.com/Aryanpatel1066/"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-instagram fa-fade fa-2xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </NavLink>
              </span>
              <span className="social-media-link">
                {" "}
                <NavLink to="#">
                  {" "}
                  <i
                    className="fa-brands fa-linkedin fa-fade fa-2xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </NavLink>{" "}
              </span>
            </div>
          </div>
          <br />
        </div>
        <div className="copy-part">
          <div className="header-row below"></div>
          <div className="coppy-section">
            Copyright <span style={{ color: "#e0aaff" }}>©</span> 2023: Design
            and Devlop by AryanPatel
          </div>
        </div>
      </div>
    </>
  );
}
