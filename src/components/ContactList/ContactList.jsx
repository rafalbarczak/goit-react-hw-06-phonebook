import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { deleteContact } from 'Redux/actions';
import { getContacts } from 'Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts &&
        contacts.map(contact => (
          <li className={css.list__item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onContactDelete: PropTypes.func.isRequired,
// };
