import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';

interface Props {
  value?: string
}

const Search: React.FC<Props> = ({ value = '' }) => {
  const [query, setQuery] = useState<string>(value);
  const history = useNavigate();

  const handleSetQuery = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) history(`/?query=${query}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          value={query}
          placeholder="Write username..."
          onChange={handleSetQuery}
        />
        <button className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  )
};

export default Search