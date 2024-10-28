import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../services/api";
interface PropsImageGallery {
  gallerys: Image[];
  onImageClick: (image: Image) => void;
}
const ImageGallery: React.FC<PropsImageGallery> = ({
  gallerys,
  onImageClick,
}) => {
  if (!gallerys || gallerys.length === 0) {
    return null;
  }

  return (
    <ul className={s.list}>
      {gallerys.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} openModal={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
