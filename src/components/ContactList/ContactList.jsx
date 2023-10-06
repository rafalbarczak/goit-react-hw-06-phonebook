import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';
import { useEffect } from 'react';
import { addContact } from 'Redux/actions';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem('contacts');

    if (storedData) {
      const parsedContacts = JSON.parse(storedData);

      parsedContacts.forEach(contact => {
        dispatch(addContact(contact.name, contact.number));
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (contacts.length === 0) {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  const handleContactsDisplay = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <ul>
      {contacts &&
        handleContactsDisplay().map(contact => (
          <li className={css.list__item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
