import * as moment from 'moment';

import { ExpenseDTOInterface, ExpenseInterface } from './expense.interface';
import { Expense } from './expense';

const now = moment();

export const MockExpenseDTO: ExpenseDTOInterface = {
    concepto: 'mock',
    importe: 10.5,
    fecha: now.format()
};

export const MockExpense: ExpenseInterface = new Expense({
    id: 1,
    ... MockExpenseDTO
});
