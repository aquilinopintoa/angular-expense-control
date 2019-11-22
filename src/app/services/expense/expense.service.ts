import { orderBy } from 'lodash';
import { Injectable } from '@angular/core';
import { Expense } from '../../models/expense/expense';
import { ExpenseDTOInterface } from '../../models/expense/expense.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AppState } from 'src/app/models/app-state/app-state.interface';

export const APP_LABEL = 'app-state';
export const DEFAULT_APP_STATE = {
  expensesCounter: 0,
  expenses: []
};

@Injectable()
export class ExpenseService {

  public expensesCounter: number;
  public expenses: Expense[];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    const appState: AppState = this.localStorageService.get(APP_LABEL) || DEFAULT_APP_STATE;

    this.expensesCounter = appState.expensesCounter;
    this.expenses = appState.expenses;
  }

  public getAll(): Expense[] {
    return this.expenses;
  }

  public getAllSortedByDate(): Expense[] {
    const expenses = this.getAll();
    return orderBy(expenses, ['date'], ['desc']);
  }

  public create(dtoExpense: ExpenseDTOInterface): void {
    const completedExpense = Object.assign(dtoExpense, {
      id: this.expensesCounter
    });

    const expense = new Expense(completedExpense);

    // update state (improve with redux)
    this.expenses = [expense, ...this.expenses];
    this.expensesCounter++;

    this.saveState();
  }

  public saveState() {
    this.localStorageService.set(APP_LABEL, {
      expenses: this.expenses,
      expensesCounter: this.expensesCounter
    });
  }
}
