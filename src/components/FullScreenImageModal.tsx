import React from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/gallery.css";

interface FullScreenImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
}

const FullScreenImageModal: React.FC<FullScreenImageModalProps> = ({
  isOpen,
  onClose,
  imgSrc,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Full Screen Image"
      className="fullscreen-modal"
      overlayClassName="fullscreen-modal-overlay"
    >
      <button onClick={onClose} className="close-button">
        Close
      </button>
      <LazyLoadImage
        src={imgSrc}
        alt="Full Screen"
        className="fullscreen-image"
        effect="blur"
      />
    </Modal>
  );
};

export default FullScreenImageModal;
