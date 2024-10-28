import s from "./ImageCard.module.css";
import { Image } from "../../services/api";
type PropsImageCard = {
  image: Image;
  openModal: () => void;
};

const ImageCard: React.FC<PropsImageCard> = ({ image, openModal }) => {
  const { urls, alt_description } = image;
  return (
    <div onClick={openModal}>
      <img className={s.img} src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
