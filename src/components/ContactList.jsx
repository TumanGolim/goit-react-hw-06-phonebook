// ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(state => {
    const { items, filter } = state.contacts;
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
