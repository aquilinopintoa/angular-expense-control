import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ExpenseInterface } from '../../models/expense/expense.interface';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit, OnChanges {
  @Input() public expenses: ExpenseInterface[];

  public hasExpenses = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateHasExpenses();
  }

  public updateHasExpenses(): void {
    this.hasExpenses = !!this.expenses.length;
  }

}
