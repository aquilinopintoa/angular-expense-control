import { Expense } from '../expense/expense';

export interface AppState {
    expensesCounter: number;
    expenses: Expense[];
}
