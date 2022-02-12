import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { getContacts } from '../../redux/phonebook/selectors';
import actions from '../../redux/phonebook/actions';

export default function Contacts() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onDeleteContactCard = id => {
    dispatch(actions.deleteContactAction(id));
  };

  return (
    <ul className={s.cardList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.cardBox} key={id}>
          <p className={s.cardValues}>
            {name}: {number}
          </p>
          <div className={s.buttonBox}>
            <button
              className={s.deleteButton}
              onClick={() => onDeleteContactCard(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
