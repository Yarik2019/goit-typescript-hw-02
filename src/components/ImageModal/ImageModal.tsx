import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

import { Image } from "../../services/api";

interface PropsImageModal {
  isOpen: boolean;
  image: Image;
  onRequestClose: () => void;
}

ReactModal.setAppElement("#root");
const ImageModal: React.FC<PropsImageModal> = ({
  isOpen,
  image,
  onRequestClose,
}) => {
  const { urls, alt_description, user, likes } = image;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      {image && (
        <div className={s.wrapperModal}>
          <div className={s.blockInfo}>
            {" "}
            <img
              src={urls.regular}
              alt={alt_description || "Image"}
              className={s.img}
            />
            <div className={s.infoText}>
              <p className={s.text}>
                {" "}
                <span className={s.span}>Author:</span> {user.name}
              </p>
              <p className={s.text}>
                {" "}
                <span className={s.span}>Likes:</span> {likes}
              </p>
              <p className={s.text}>
                {" "}
                <span className={s.span}>Deskription:</span> {alt_description}
              </p>
            </div>
          </div>
        </div>
      )}
    </ReactModal>
  );
};

export default ImageModal;
