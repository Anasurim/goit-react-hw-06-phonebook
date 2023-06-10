// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

export function App() {
  // const storedContacts = localStorage.getItem('contacts');
  // const parsedContacts = storedContacts
  //   ? JSON.parse(storedContacts)
  //   : defaultContacts;

  // const [contacts, setContacts] = useState(defaultContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = contact => {
  //   const newContact = {
  //     id: nanoid(5),
  //     name: contact.name,
  //     number: contact.number,
  //   };

  //   const isNameExists = contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   isNameExists
  //     ? Notify.failure(`${newContact.name} is already exists`)
  //     : setContacts([newContact, ...contacts]);
  // };

  // const filterContact = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const normalizedFilter = filter.toLowerCase().trim();
  // const filterContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(normalizedFilter);
  // });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={filterContact} /> */}
      <ContactList />
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  filter: PropTypes.string,
};
