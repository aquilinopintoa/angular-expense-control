import * as moment from 'moment';
import { ExpenseInterface } from './expense.interface';

export class Expense implements ExpenseInterface {
    public id: number;
    public description: string;
    public date: string;
    public amount: number;

    constructor(expense: ExpenseInterface) {
        this.id = expense.id;
        this.description = expense.description;
        this.amount = expense.amount;
        this.date = expense.date;
    }
}
