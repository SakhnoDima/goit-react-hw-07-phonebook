import React from 'react';
import { Total, TotalBox, TotalIcon } from './TotalContacts.style';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const TotalContacts = () => {
  const contacts = useSelector(getContacts);

  return (
    <TotalBox>
      <TotalIcon />
      <Total>{contacts.length}</Total>
    </TotalBox>
  );
};

export default TotalContacts;
