import { Injectable } from '@angular/core';
import { Expense } from '../../models/expense/expense';
import { ExpenseDTOInterface } from '../../models/expense/expense.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class ExpenseService {

  public countCreatedExpenses = 0;
  public expenses: Expense[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public getAll(): Expense[] {
    return this.expenses;
  }

  public create(dtoExpense: ExpenseDTOInterface): void {
    const completedExpense = Object.assign(dtoExpense, {
      id: this.countCreatedExpenses
    });

    const expense = new Expense(completedExpense);
    this.expenses = [expense, ...this.expenses];
    this.countCreatedExpenses++;
  }
}
