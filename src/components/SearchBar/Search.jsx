import { searchIcon } from '../../assets';
import Button from '../Button/Button';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles['search-field']}>
      <input className={styles['search-input']}></input>
      <Button className={styles.button}>
        <p>Search</p>
        <img src={searchIcon} className={styles['search-icon']} />
      </Button>
    </div>
  );
};

export default Search;
