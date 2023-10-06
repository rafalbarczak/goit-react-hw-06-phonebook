import { getFilter } from 'Redux/selectors';
import css from './ContactFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/actions';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filter__label}>
        Find contacts by name
      </label>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ></input>
    </div>
  );
};
