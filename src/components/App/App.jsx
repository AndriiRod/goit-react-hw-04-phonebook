import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Phonebook from 'components/Phonebook/';
import AddContactForm from 'components/AddContactForm/';
import Contacts from 'components/Contacts/';
import FindField from 'components/FindField/';

import users from '../../users.json';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? users
  );
  const [currentPage, setCurrentPage] = useState('addContact');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlePageChange = () => {
    setCurrentPage(prevPage =>
      prevPage === 'addContact' ? 'contacts' : 'addContact'
    );
  };

  const checkingForMatches = data => {
    const { name } = data;
    const matches = contacts.find(item => item.name === name);
    if (matches) {
      toast.info(
        `${name.charAt(0).toUpperCase() + name.slice(1)} is already in contacts`
      );
      return;
    }
    addNewContact(data);
  };

  const addNewContact = data => {
    const newItem = {
      id: nanoid(5),
      ...data,
    };
    setContacts(prevContacts => [newItem, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Phonebook title="Phonebook" changePage={handlePageChange}>
      {currentPage === 'addContact' && (
        <AddContactForm checkingForMatches={checkingForMatches} />
      )}
      {currentPage === 'contacts' && (
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        >
          <FindField value={filter} changeFilter={changeFilter} />
        </Contacts>
      )}
      <ToastContainer theme="colored" />
    </Phonebook>
  );
};

export default App;
