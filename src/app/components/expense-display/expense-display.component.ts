import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';

@Component({
  selector: 'app-expense-display',
  templateUrl: './expense-display.component.html',
  styleUrls: ['./expense-display.component.scss']
})
export class ExpenseDisplayComponent implements OnInit {

  @Input() public expense: Expense;

  constructor() { }

  ngOnInit() {
  }

}
