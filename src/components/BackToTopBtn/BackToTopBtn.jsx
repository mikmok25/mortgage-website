import React, { useState, useEffect } from "react";
import ArrowIcon from "../../assets/ArrowIcon.png";

function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      // Show the button if the scroll percentage is >= 20
      setIsVisible(scrollPercentage >= 20);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
    //   <button
    //     onClick={scrollToTop}
    //     style={{
    //       position: "fixed",
    //       bottom: "20px",
    //       right: "20px",
    //       padding: "10px 20px",
    //       fontSize: "16px",
    //       backgroundColor: "#007bff",
    //       color: "#fff",
    //       border: "none",
    //       borderRadius: "5px",
    //       cursor: "pointer",
    //       boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    //     }}
    //   >
    //     Back to Top
    //   </button>

    <div className="back-to-top-btn-container" onClick={scrollToTop}>
        <img src={ArrowIcon} alt="Arrow-Icon" />
    </div> 
    )
  );
}

export default BackToTopBtn;
