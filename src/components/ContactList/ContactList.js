import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../app/contactsSlice';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <p className={css.listName}>
              {name}: {number}
            </p>

            <button
              type="button"
              onClick={dispatch(() => deleteContact)}
              className={css.listButton}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
