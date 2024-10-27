import s from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  return (
    <div onClick={() => openModal(image)}>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
