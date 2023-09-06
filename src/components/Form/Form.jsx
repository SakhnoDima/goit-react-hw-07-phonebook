import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from 'redux/index';

import { Label, Button, Forma, Input, Error } from './Form.styles';
import { Spinner } from 'components/Spinner/Spinner';
import { KEY_LS } from 'components/helpers/themtoggle';

const schema = object({
  name: string().required('Name is required!'),
  number: string()
    .required('Number is required!')
    .min(10, 'Too Short!')
    .max(13, 'Too Long!'),
});

const Forms = ({ onSubmit }) => {
  // const isLoading = useSelector(selectors.getIsLoading);
  // const error = useSelector(selectors.getError);
  const loading = useSelector(selectors.getLoadState);
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  const state = {
    name: '',
    number: '',
  };
  const idNameForm = nanoid();
  const idTelForm = nanoid();

  // === сабміт форми ===
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    // ===  перевірка на вже існуюче ім'я ===
    const includeName = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (includeName) {
      alert(`${name} Is already in contacts`);
      return;
    }
    // === додавання до списку крнтакту ===

    const updateContacts = {
      name: name,
      phone: number,
    };
    dispatch(operations.addContact(updateContacts)); //!add

    const theme = localStorage.getItem(KEY_LS);

    toast.success(`${name} was added to your contacts`, {
      autoClose: 2000,
      theme: `${theme === 'theme-dark' ? 'dark' : 'light'}`,
    });
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma autoComplete="off">
          <Label htmlFor={idNameForm}>
            Name
            <Input
              type="text"
              name="name"
              id={idNameForm}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            <ErrorMessage component={Error} name="name" />
          </Label>
          <Label htmlFor={idTelForm}>
            Number
            <Input
              id={idTelForm}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />
            <ErrorMessage component={Error} name="number" />
          </Label>
          <Button disabled={loading} type="submit" title={'Add contact'}>
            {loading ? <Spinner /> : 'Add contact'}
          </Button>
        </Forma>
      </Formik>
    </>
  );
};
export default Forms;
