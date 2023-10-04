import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/actions';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    // reset();
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ name, number });
  //   reset();
  // };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.form__label}>
        Name
      </label>
      <input
        className={css.form__input}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number" className={css.form__label}>
        Number
      </label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        id="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
