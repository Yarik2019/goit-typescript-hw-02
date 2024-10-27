import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallerys, openModal }) => {
  if (!gallerys.length) return null;
  return (
    <ul className={s.list}>
      {gallerys.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
