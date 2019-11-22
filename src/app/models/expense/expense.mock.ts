import * as moment from 'moment';

import { ExpenseDTOInterface, ExpenseInterface } from './expense.interface';
import { Expense } from './expense';

const now = moment();

export const MockExpenseDTO: ExpenseDTOInterface = {
    description: 'mock',
    amount: 10.5,
    date: now.format()
};

export const MockExpense: ExpenseInterface = new Expense({
    id: 1,
    ... MockExpenseDTO
});
