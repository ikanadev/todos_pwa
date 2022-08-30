import Dexie from 'dexie';

import type {ITodo, TodoTransaction} from './types';
import {DB_NAME, DB_VERSION} from './constants';

export default class Store extends Dexie {
  // @ts-ignore
  todos: Dexie.Table<ITodo, string>;
  // @ts-ignore
  todoTransactions: Dexie.Table<TodoTransaction, string>;

  constructor() {
    super(DB_NAME);
    this.version(DB_VERSION).stores({
      todos: 'id, text, checked',
      todoTransactions: 'id, type, dateTime',
    });
  }
}

export const db = new Store();
