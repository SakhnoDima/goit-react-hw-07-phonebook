import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { Button, Div, Error, Item, List } from './Contacts.styles';
import { removeContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();

  // === фільтруємо по імені ===
  const filterContacts = (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  };

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <Div>
      {contacts.length > 0 ? (
        <List>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <Item key={id}>
                <RiContactsBook2Fill />
                {name} : {number}
                <Button onClick={() => dispatch(removeContact(id))}>
                  <RiDeleteBin5Line />
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <Error>Contacts not found</Error>
      )}
    </Div>
  );
};
