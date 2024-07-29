import { useState } from "react";
import "../../css/bubblebt.css";

const BubblyButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset the animation
  };

  return (
    <button
      className={`bubbly-button ${isClicked ? "animate" : ""}`}
      onClick={handleClick}
    >
      Learn More
    </button>
  );
};

export default BubblyButton;
