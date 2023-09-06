import React from 'react';
import { Total, TotalBox, TotalIcon } from './TotalContacts.style';
import { contactsApi } from '../../redux/index';

const TotalContacts = () => {
  const { data } = contactsApi.useGetAllContactsQuery();
  return (
    <TotalBox>
      <TotalIcon />
      <Total>{data?.length}</Total>
    </TotalBox>
  );
};

export default TotalContacts;
