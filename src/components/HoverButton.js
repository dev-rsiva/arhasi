import React from "react";
import "./styles.css"; // Make sure to import your CSS file

const HoverButton = ({ label }) => {
  const btnRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (btn) {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <button
      ref={btnRef}
      className="btn px-5 py-4 small-mobile:py-4 mx-2 my-2 mobile:my-2 small-mobile:my-[6px] rounded-full"
      // onMouseMove={handleMouseMove}
    >
      <span className="">{label}</span>
    </button>
  );
};

export default HoverButton;
