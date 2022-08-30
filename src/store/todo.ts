import {nanoid} from 'nanoid';

import {ITodo, TodoTransaction, Operation, ITodoField, ITodoValue} from './types';
import {db} from './';

export function addTodo(todo: ITodo) {
  return db.transaction('rw', [db.todos, db.todoTransactions], () => {
    const transaction: TodoTransaction = {
      id: nanoid(),
      type: Operation.Insert,
      dateTime: (new Date()).toISOString(),
      data: todo,
    };
    db.todos.add(todo);
    db.todoTransactions.add(transaction);
  });
}

export function deleteTodo(id: string) {
  return db.transaction('rw', [db.todos, db.todoTransactions], () => {
    const transaction: TodoTransaction = {
      id: nanoid(),
      type: Operation.Delete,
      dateTime: (new Date()).toISOString(),
      data: id,
    };
    db.todos.delete(id);
    db.todoTransactions.add(transaction);
  });
}

export function updateTodo(id: string, field: ITodoField, newValue: ITodoValue) {
  return db.transaction('rw', [db.todos, db.todoTransactions], () => {
    const transaction: TodoTransaction = {
      id: nanoid(),
      type: Operation.Update,
      dateTime: (new Date()).toISOString(),
      data: {id, field, newValue},
    };
    db.todos.update(id, {[field]: newValue});
    db.todoTransactions.add(transaction);
  });
}
