import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';
// import useLocalStorage from './Hooks/useLocalStorage';
import {Container, Title, Subtitle} from './App.styled';
import { nanoid } from 'nanoid';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {

  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const itemsContact = () => {
    return JSON.parse(localStorage.getItem('contacts')) || defaultContacts;
  };

  const [contacts, setContacts] = useState(itemsContact());

  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    setFilter('');
  };

  return (
 <Container>
 <Title>Phonebook</Title>
 <ContactForm 
      onSubmit={addContacts} 
      />
 <Subtitle>Contacts</Subtitle>
 <Filter
      value={filter} 
      onChange={changeFilter} 
      />
 <ContactList
      contacts={getContacts()}
      onDeleteContact={deleteContact}
        />
</Container>
  )
  
}

