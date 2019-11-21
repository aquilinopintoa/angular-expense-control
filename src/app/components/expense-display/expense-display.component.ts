import { Component, OnInit, Input } from '@angular/core';
import { ExpenseInterface } from 'src/app/models/expense/expense.interface';

@Component({
  selector: 'app-expense-display',
  templateUrl: './expense-display.component.html',
  styleUrls: ['./expense-display.component.scss']
})
export class ExpenseDisplayComponent implements OnInit {

  @Input() public expense: ExpenseInterface;

  constructor() { }

  ngOnInit() {
  }

}
