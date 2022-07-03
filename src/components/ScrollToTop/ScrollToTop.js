import React, { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { IconContext } from "react-icons";
import { AnimatePresence } from "framer-motion";
import { ScrollToTopButton } from "./ScrollToTop.styles";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isVisible ? (
          <ScrollToTopButton
            type="button"
            onClick={scrollToTop}
            BtnOpacity="1"
            initial={{ opacity: 0.5, height: "auto" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0 }}
          >
            <IconContext.Provider value={{ size: "50px" }}>
              <BiArrowFromBottom />
            </IconContext.Provider>
          </ScrollToTopButton>
        ) : (
          <ScrollToTopButton
            type="button"
            onClick={scrollToTop}
            BtnOpacity="0"
          ></ScrollToTopButton>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;
