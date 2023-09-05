import { AiOutlineCloseCircle } from 'react-icons/ai';

import Forms, { IconButton, Modal } from './Form';
import { Contacts } from './Contacts';
import Filter from './Filter';
import { MainPage, Button, Title, Title2, Header } from './styles/App.styles';

import { ThemeButton } from './ThemButtton/ThemeButton';
import TotalContacts from './TotalContacts/TotalContacts';
import { useEffect, useState } from 'react';
import { keepTheme } from './helpers/themtoggle';

export const App = () => {
  const [showModal, setModalShow] = useState(false);

  useEffect(() => {
    keepTheme();
  });
  const modalToggle = () => {
    setModalShow(prev => !prev);
  };
  return (
    <MainPage>
      <Header>
        <TotalContacts />
        <ThemeButton />
      </Header>
      <Title style={{ textAlign: 'center' }}>Phonebook</Title>
      <Forms />
      <Button type="button" onClick={modalToggle}>
        All Cntacts
      </Button>
      {showModal && (
        <Modal onCloses={modalToggle}>
          <>
            <IconButton onClick={modalToggle}>
              <AiOutlineCloseCircle />
            </IconButton>
            <Title2 style={{ textAlign: 'center' }}>Contacts</Title2>
            <Filter />
            <Contacts />
          </>
        </Modal>
      )}
    </MainPage>
  );
};
