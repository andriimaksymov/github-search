import React, { useState } from 'react';
import styles from './Search.module.scss';

interface Props {
  placeholder?: string,
  onSearch: (value: string) => void,
}

const Search: React.FC<Props> = ({ onSearch, placeholder = 'Write username...' }) => {
  const [query, setQuery] = useState<string>('');

  const handleSetQuery = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          value={query}
          placeholder={placeholder}
          onChange={handleSetQuery}
        />
        <button className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  )
};

export default Search;