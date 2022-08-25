import Dexie from 'dexie';

import {DB_NAME, DB_VERSION} from './constants';

export interface ITodo {
  id: string;
  text: string;
  checked: boolean;
}

export default class Store extends Dexie {
  // @ts-ignore
  todos: Dexie.Table<ITodo, string>;

  constructor() {
    super(DB_NAME);
    this.version(DB_VERSION).stores({
      todos: 'id, text, checked'
    });
  }
}

export const db = new Store();
