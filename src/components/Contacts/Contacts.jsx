import React from 'react';
import { selectors } from 'redux/index';
import { useSelector } from 'react-redux';

import { Div, Error, List } from './Contacts.styles';
import Contact from 'components/Contact/Contact';

export const Contacts = () => {
  const filteredContacts = useSelector(selectors.getFilterContacts);

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
