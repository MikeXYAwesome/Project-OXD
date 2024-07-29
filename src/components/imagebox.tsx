import "../css/imagebox.css";
import React, { ReactNode } from "react";

interface ImageBoxProps {
  width: "full" | "half" | "third";
  children?: ReactNode;
}

const ImageBox: React.FC<ImageBoxProps> = ({ width = "full", children }) => {
  let widthClass = "";

  switch (width) {
    case "full":
      widthClass = "full-width";
      break;
    case "half":
      widthClass = "half-width";
      break;
    case "third":
      widthClass = "third-width";
      break;
    default:
      widthClass = "full-width";
  }

  return <div className={`ImageWarp ${widthClass}`}> {children}</div>;
};

export default ImageBox;
