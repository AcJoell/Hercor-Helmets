import React from "react";
import "./footer.css";
import Locate from "../assets/locate.png";
import SMS from "../assets/phone.png";
import Email from "../assets/email.png";
import Face from "../assets/face.png";
import Insta from "../assets/sms.png";

export const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-footer_boxOne">
        <ul>
          <li>
            <a>
              <img src={Locate} />
            </a>
          </li>
          <li>
            <a>
              <img src={SMS} />
            </a>
          </li>
          <li>
            <a>
              <img src={Email} />
            </a>
          </li>
        </ul>
      </div>
      <div className="container-footer_boxTwo">
      <ul>
          <li>
            <a>
              <img src={Face} />
            </a>
          </li>
          <li>
            <a>
              <img src={Insta} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
