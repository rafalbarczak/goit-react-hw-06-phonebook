import { deleteContact } from 'Redux/actions';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      {contact && (
        <div>
          {contact.name}: {contact.number}
          <button
            className={css.deleteBtn}
            name="delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
