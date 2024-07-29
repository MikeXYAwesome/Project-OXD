import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../css/modal.css";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ModalProps {
  isVisible: boolean;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, content, onClose }) => {
  const [shouldRender, setRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) setRender(true);
  }, [isVisible]);

  const handleAnimationEnd = () => {
    if (!isVisible) setRender(false);
  };

  return shouldRender ? (
    <div
      className={`modal-overlay ${isVisible ? "fade-in" : "fade-out"}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={`modal-content ${isVisible ? "slide-in" : "slide-out"}`}>
        <div className="modal-header">
          <h2>CSS Code</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <SyntaxHighlighter language="css" style={prism}>
            {content}
          </SyntaxHighlighter>
        </div>
        <div className="modal-footer">
          <button className="modal-ok" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
