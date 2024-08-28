import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatcher = useDispatch();
  const onReset = () => dispatcher(changeFilter(''));

  const contactList = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);

  const filteredContacts = contactList.filter(contact => contact.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  return filteredContacts.length > 0 ? (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  ) : (
    <>
      <p>There are no contacts</p>
      {contactList.length > 0 && (
        <button className={css.btn} onClick={onReset}>
          Reset default
        </button>
      )}
    </>
  );
}
