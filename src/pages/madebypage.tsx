import Masonry from "react-masonry-css";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/gallery.css";
import Footer from "../components/footer";

function MadeByOxd() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const items = [
    { id: 1, content: "OXD list view", img: "img/gallery/img8.png" },
    { id: 2, content: "OXD table", img: "img/gallery/img9.png" },
    { id: 3, content: "OXD filter Popup", img: "img/gallery/img1.png" },
    { id: 4, content: "OXD add emplyoee modal", img: "img/gallery/img12.png" },
    { id: 5, content: "OXD setting modal", img: "img/gallery/img3.png" },
    { id: 6, content: "OXD Long Form", img: "img/gallery/img10.png" },
    {
      id: 7,
      content: "OXD Form With Text Editor",
      img: "img/gallery/img11.png",
    },
    { id: 8, content: "add goal", img: "img/gallery/img14.png" },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <div className="GalleryWarp">
        <h1 className="galleryTitle">Made By OXD</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item) => (
            <LazyLoad key={item.id} height={200} offset={100} once>
              <div className="item" onClick={() => openModal(item.img)}>
                <div className="image-wrapper">
                  <LazyLoadImage
                    src={item.img}
                    alt={`Item ${item.id}`}
                    className="gallery-image"
                    effect="blur"
                  />
                </div>
                <span>{item.content}</span>
              </div>
            </LazyLoad>
          ))}
        </Masonry>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Full Screen Image"
        className="fullscreen-modal"
        overlayClassName="fullscreen-modal-overlay"
      >
        <button onClick={closeModal} className="close-button">
          Close
        </button>
        <LazyLoadImage
          src={selectedImage}
          alt="Full Screen"
          className="fullscreen-image"
          effect="blur"
        />
      </Modal>
      <Footer />
    </>
  );
}

export default MadeByOxd;
