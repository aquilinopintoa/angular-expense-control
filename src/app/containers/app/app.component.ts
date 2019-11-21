import { Component, OnInit } from '@angular/core';

import { ExpenseInterface, ExpenseDTOInterface } from '../../models/expense/expense.interface';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'MIS GASTOS';

  public isOpenedExpenseForm = false;

  public expenses: ExpenseInterface[] = [];

  constructor(
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
    this.fecthExpenses();
  }
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
  public addExpense(dtoExpense: ExpenseDTOInterface): void {
    this.expenseService.create(dtoExpense);
    this.fecthExpenses();
  }

  /**
   * fecthExpenses
   */
  public fecthExpenses() {
    this.expenses = this.expenseService.getAll();
  }
}
