import s from './App.module.css';
import { useState } from 'react';
import Contacts from './components/Contacts/Contacts';
import Phonebook from './components/Phonebook/Phonebook';
import shortid from 'shortid';
import Filter from './components/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const App = () => {
  const [filter, setFilter] = useState('');

  // const filterChange = e => {
  //   setFilter(e.target.value);
  // };

  // const addContactCard = ({ name, number }) => {
  //   const repeatName = contacts.find(contact => {
  //     return contact.name.toLowerCase() === name.toLowerCase();
  //   });
  //   if (repeatName) {
  //     Notify.warning(`${name} is already in contacts`);
  //     return;
  //   }
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   setContacts(prev => {
  //     return [contact, ...prev];
  //   });

  //   Notify.success(`${name} is added in contacts`);
  // };

  return (
    <section className={s.phonebookSection}>
      <Phonebook />
      <Filter />
      <Contacts />
    </section>
  );
};
export default App;
