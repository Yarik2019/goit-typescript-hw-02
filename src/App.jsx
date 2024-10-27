import "./App.css";
import { useState, useEffect } from "react";
import { fetchGallery } from "./services/api";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
function App() {
  const [gallerys, setGallerys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(null);

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

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      toast.error("Будь ласка, введіть пошуковий текст");
      return;
    }
    setQuery(searchQuery);
    setGallerys([]);
    setPage(1);
  };
  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage message={isError} />}
      {gallerys.length > 0 && (
        <ImageGallery gallerys={gallerys} openModal={openModal} />
      )}
      {!gallerys.length > 0 && !isError && <p>Sorry gallerys is not photos </p>}
      {gallerys.length > 0 && !isLoading && (
        <LoadMoreBtn loadMoreImages={loadMoreImages} />
      )}
      {isLoading && <Loader />}
      {showModal && <ImageModal image={modalImage} closeModal={closeModal} />}
    </>
  );
}

export default App;
