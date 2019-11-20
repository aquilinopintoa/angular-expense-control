import * as moment from 'moment';

import { Component } from '@angular/core';

import { Expense } from '../../interfaces/expense';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'MIS GASTOS';

  public isOpenedExpenseForm = false;

  public expenses: Expense[] = [];

  /**
   * openExpenseForm
   */
  public openExpenseForm(): void {
    this.isOpenedExpenseForm = true;
  }

  /**
   * closeExpenseForm
   */
  public closeExpenseForm(): void {
    this.isOpenedExpenseForm = false;
  }

  /**
   * addExpense
   */
  public addExpense(expense: Expense): void {
    this.expenses = [expense, ...this.expenses];
  }
}
