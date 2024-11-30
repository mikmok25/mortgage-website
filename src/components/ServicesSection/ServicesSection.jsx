import React from "react";
import ServicesLogo from "../../assets/ServicesLogo.png";
import TranscriptIcon from "../../assets/TranscriptIcon.png";
import House1 from "../../assets/House1.svg";

import Arrow from "../../assets/Arrow.svg";
import "./ServicesSection.scss";
function ServicesSection() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="container">
      <div className="flex-column">
        <img src={ServicesLogo} alt="" />
        <h2>OUR SERVICES DESIGNED TO MEET YOUR NEEDS</h2>
        <h3>TALK TO OUR STAFF FOR MORE INFORMATION</h3>
      </div>
      <div className="flex-row"  >
        <div className="services">
          <div className="service">
            <img src={House1} alt="" />
          </div>
          <div className="service">
            <img src={House1} alt="" />
          </div>
          <div className="service">
            <img src={House1} alt="" />
          </div>
          <div className="service">
            <img src={House1} alt="" />
          </div>

          {showMore && (
            <>
              <div className={`service ${!setShowMore ? 'collapsed' : 'expanded'}` }>
                <img src={House1} alt="" />
              </div>
              <div className={`service ${!setShowMore ? 'collapsed' : 'expanded'}` }>
                <img src={House1} alt="" />
              </div>
            </>
          )}

          <a onClick={() => setShowMore(!showMore)}>{!showMore ? "View More" : "View Less"}</a>
        </div>

        <div className="side-info" style={{paddingTop: `${!showMore ? "200px" : "300px"}`}}>
          <h4> Buying a Home? We’ll Take Care of Everything!</h4>

          <p>
            At Caribbean Connect Capital, Our goal is to make financing easier
            for Canadians and qualified foreign applicants to purchase their
            first property.{" "}
          </p>

          <ul>
            <li>
              <img src={Arrow} alt="" />We have more than one lender.
            </li>
            <li>
              <img src={Arrow} alt="" />
              Based in the Toronto Area.
            </li>
            <li>
              <img src={Arrow} alt="" /> We are from the Caribbean.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
