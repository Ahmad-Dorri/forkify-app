import styles from './Header.module.css';
import { logo } from '../../assets';
import Search from '../SearchBar/Search';
import NavLink from '../NavLink/NavLink';
const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} />
      <Search />
      <NavLink>
        <p>Add Recipe</p>
      </NavLink>
      <NavLink>
        <p>Bookmark</p>
      </NavLink>
    </div>
  );
};

export default Header;
