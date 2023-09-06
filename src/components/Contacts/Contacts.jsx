import React from 'react';
import { selectors } from 'redux/index';
import { useSelector } from 'react-redux';

import { Div, Error, List } from './Contacts.styles';
import Contact from 'components/Contact/Contact';

export const Contacts = () => {
  // === фільтруємо по імені ===
  const filterContacts = (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  };

  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <Div>
      {contacts.length > 0 ? (
        <List>
          {filteredContacts.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })}
        </List>
      ) : (
        <Error>Contacts not found</Error>
      )}
    </Div>
  );
};
