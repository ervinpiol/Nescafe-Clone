import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0 && !isVisible) {
        setIsVisible(true);
      } else if (currentScrollY === 0 && isVisible) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const handleScrollToTop = () => {
    const scrollDuration = 500; // Duration of the scroll animation in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Distance to scroll each frame

    const animateScroll = () => {
      window.scrollBy(0, scrollStep);

      if (window.scrollY > 0) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed z-[500] rounded-full border-2 bg-black px-[21px] py-4 opacity-50 transition-all duration-500 ease-in-out hover:bg-Red hover:opacity-100 xxs:bottom-24 xxs:right-5 md:right-16 xl:bottom-[105px] xl:right-16 "
          onClick={handleScrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} className="text-sm text-white" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
