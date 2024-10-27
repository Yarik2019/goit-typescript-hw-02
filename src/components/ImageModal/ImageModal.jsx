import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { useEffect } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ image, closeModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      {image && (
        <div className={s.wrapperModal}>
          <div className={s.blockInfo}>
            {" "}
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className={s.img}
            />
            <div className={s.infoText}>
              <p className={s.text}>
                {" "}
                <span className={s.span}>Author:</span> {image.user.name}
              </p>
              <p className={s.text}>
                {" "}
                <span className={s.span}>Likes:</span> {image.likes}
              </p>
              <p className={s.text}>
                {" "}
                <span className={s.span}>Deskription:</span>{" "}
                {image.alt_description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
