export interface ITodo {
  id: string;
  text: string;
  checked: boolean;
};

export interface TodoTransaction {
  id: string;
  type: Operation;
  data: ITodo | {id: string, field: ITodoField, newValue: ITodoValue } | string;
  dateTime: string;
};

export type ITodoField = keyof ITodo;
export type ITodoValue = ITodo[ITodoField];

export enum Operation {
  Insert = 'INSERT',
  Update = 'UPDATE',
  Delete = 'DELETE',
};
