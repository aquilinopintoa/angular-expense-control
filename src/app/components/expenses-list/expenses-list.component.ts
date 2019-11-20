import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Expense } from '../../interfaces/expense';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit, OnChanges {
  @Input() public expenses: Expense[];

  public hasExpenses = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateHasExpenses();
  }

  private updateHasExpenses(): void {
    this.hasExpenses = !!this.expenses.length;
  }

}
