import { useState } from 'react';
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';
import {Container, Title, Subtitle} from './App.styled';
import useLocalStorage from './Hooks/useLocalStorage';
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

    const isName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isName) {
      return alert(`${name} is already in contacts.`);
    };

  setContacts([contact, ...contacts]);
  };
  
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    setFilter('');
  };


  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContact = () =>  {
    contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
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
      contacts={getContact()}
      onDeleteContact={deleteContact}
        />
</Container>
  )
};
