import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

export default function App() {
  const contactsList = useSelector(selectContacts);
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <div className={css.card}>
        <ContactForm />
      </div>
      {contactsList.length > 0 && (
        <div className={css.card}>
          <SearchBox />
        </div>
      )}
      <div className={css.list}>
        <ContactList />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
