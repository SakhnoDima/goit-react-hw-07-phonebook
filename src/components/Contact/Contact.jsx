import React from 'react';
import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { Button, Item } from './Contact.styles';
import { Spinner } from 'components/Spinner/Spinner';
import { contactsApi } from 'redux/index';
import { KEY_LS } from 'components/helpers/themtoggle';

const Contact = ({ id, name, phone }) => {
  const [removeContact, { isLoading: isDelitig }] =
    contactsApi.useRemoveContactMutation();

  const handleOnClick = (id, name) => {
    removeContact(id);
    const theme = localStorage.getItem(KEY_LS);

    toast.success(`${name} was deleted from your contacts`, {
      autoClose: 2000,
      theme: `${theme === 'theme-dark' ? 'dark' : 'light'}`,
    });
  };

  return (
    <>
      <Item>
        <RiContactsBook2Fill />
        {name} : {phone}
        <Button disabled={isDelitig} onClick={() => handleOnClick(id, name)}>
          {isDelitig ? <Spinner /> : <RiDeleteBin5Line />}
        </Button>
      </Item>
    </>
  );
};

export default Contact;
