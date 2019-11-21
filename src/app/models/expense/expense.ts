import * as moment from 'moment';
import { ExpenseInterface } from './expense.interface';

export class Expense implements ExpenseInterface {
    public id: number;
    public concepto: string;
    public fecha: string;
    public importe: number;

    constructor(expense: ExpenseInterface) {
        this.id = expense.id;
        this.concepto = expense.concepto;
        this.importe = expense.importe;
        this.fecha = expense.fecha;
    }
}
