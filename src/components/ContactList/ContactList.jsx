import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { setStatusFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const dispatcher = useDispatch();
  const onReset = () => dispatcher(setStatusFilter(''));
  const contactList = useSelector(state => state.contacts.items);
  const searchValue = useSelector(state => state.filters.name);
  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return filteredContacts.length > 0 ? (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  ) : (
    <>
      <p>There are no contacts</p>
      <button className={css.btn} onClick={onReset}>
        Reset default
      </button>
    </>
  );
}
