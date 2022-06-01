import { useState } from 'react';
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';
import useLocalStorage from './Hooks/useLocalStorage';
import {Container, Title, Subtitle} from './App.styled';
import { nanoid } from 'nanoid';



export default function App() {

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

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

