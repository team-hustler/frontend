import React, { useEffect, useState } from "react";
import goUp from "../Images/go_up.svg";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div
          className="z-[1000]  fixed cursor-pointer  bottom-16 right-5 "
          onClick={goToBtn}
        >
          <img className="hover:scale-110" src={goUp} alt="up" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
