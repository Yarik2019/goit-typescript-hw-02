import s from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Введіть запит для пошуку");
      return;
    }

    onSearch(query);
    setQuery("");
    e.currentTarget.reset();
  };
  return (
    <header className={s.searchBar}>
      <form className={s.form} onSubmit={handleSearch}>
        <input
          className={s.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          aria-label="Search images"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
