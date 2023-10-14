import { useEffect, useState } from "react";

export function JumpToTopNav() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.scrollY > 400 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  showButton && (
    <div className="jump-to-wrapper">
      <button
        type="button"
        className="scroll-top-button"
        onClick={handleScrollTop}
      ></button>
    </div>
  );
}
