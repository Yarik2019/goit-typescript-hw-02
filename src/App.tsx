import "./App.css";
import { useState, useEffect } from "react";
import { fetchGallery, Image } from "./services/api";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
const App: React.FC = () => {
  const [gallerys, setGallerys] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(null);

        const data = await fetchGallery(query, page);
        setGallerys((prev) => [...prev, ...data.data.results]);
      } catch (err) {
        setIsError(`Error message: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery) {
      toast.error("Будь ласка, введіть пошуковий текст");
      return;
    }
    setQuery(searchQuery);
    setGallerys([]);
    setPage(1);
  };
  const openModal = (image: Image) => {
    setModalImage(image);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage message={isError} />}
      {gallerys.length > 0 && (
        <ImageGallery gallerys={gallerys} onImageClick={openModal} />
      )}
      {!gallerys.length && !isError && <p>Sorry gallerys is not photos </p>}
      {gallerys.length > 0 && !isLoading && (
        <LoadMoreBtn loadMoreImages={loadMoreImages} />
      )}
      {isLoading && <Loader />}
      {showModal && modalImage && (
        <ImageModal
          isOpen={showModal}
          image={modalImage}
          onRequestClose={closeModal}
        />
      )}
    </>
  );
};

export default App;
