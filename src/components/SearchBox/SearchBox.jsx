import css from './SearchBox.module.css';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
  const searchValue = useSelector(selectNameFilter);
  const dispatcher = useDispatch();
  const onSearch = value => dispatcher(changeFilter(value));

  return (
    <IconContext.Provider value={{ className: css.icon }}>
      <div className={css.box}>
        <label className={css.label}>
          Find contacts by name:
          <input type="text" className={css.input} onChange={e => onSearch(e.target.value)} value={searchValue} />
          <FaUser />
        </label>
      </div>
    </IconContext.Provider>
  );
}
