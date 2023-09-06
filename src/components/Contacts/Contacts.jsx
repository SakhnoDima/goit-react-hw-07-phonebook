import React from 'react';
import { selectors } from 'redux/index';
import { useSelector } from 'react-redux';

import { Div, Error, List } from './Contacts.styles';
import Contact from 'components/Contact/Contact';
import { useGetAllContactsQuery } from 'redux/contactsApi';

export const Contacts = () => {
  const { data } = useGetAllContactsQuery();
  const filterValue = useSelector(selectors.getFilter);

  const getFilterContacts = () => {
    const normalizeFilter = filterValue.toLowerCase();
    return data.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  };

  const filteredContacts = getFilterContacts();

  return (
    <Div>
      {filteredContacts.length > 0 ? (
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
