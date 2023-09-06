import React from 'react';
import { selectors, operations } from 'redux/index';
import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Item } from './Contact.styles';
import { Spinner } from 'components/Spinner/Spinner';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.getLoadState);
  return (
    <>
      <Item>
        <RiContactsBook2Fill />
        {name} : {phone}
        <Button
          disabled={loading}
          onClick={() => dispatch(operations.deleteContact(id))}
        >
          {loading ? <Spinner /> : <RiDeleteBin5Line />}
        </Button>
      </Item>
    </>
  );
};

export default Contact;
