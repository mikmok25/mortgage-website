import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-column">
          <h1>Carribean Connect Capital</h1>
          <p>Own your first Home. Retire Happy!</p>
          <button>I WANT TO BUY A HOME</button>
        </div>
        <DotLottieReact
          src="https://lottie.host/1d3b3926-c9f9-4257-8928-7eece2041eb1/RlY1ckfgIG.lottie"
          loop
          autoplay
          className="lottie-container"
        />
      </div>
    </div>
  );
}

export default HeroSection;
