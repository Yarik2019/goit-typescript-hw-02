import s from "./LoadMoreBtn.module.css";

interface PropsLoadMoreBtn {
  loadMoreImages: () => void;
}

const LoadMoreBtn: React.FC<PropsLoadMoreBtn> = ({ loadMoreImages }) => {
  return (
    <button className={s.codepenButton} onClick={loadMoreImages}>
      <span>Load more</span>
    </button>
  );
};

export default LoadMoreBtn;
