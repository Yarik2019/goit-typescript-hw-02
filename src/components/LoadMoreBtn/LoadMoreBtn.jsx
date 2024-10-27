import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ loadMoreImages }) => {
  return (
    <button className={s.codepenButton} onClick={loadMoreImages}>
      <span>Load more</span>
    </button>
  );
};

export default LoadMoreBtn;
