import * as moment from 'moment';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ExpenseDTOInterface } from '../../models/expense/expense.interface';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  @Output() public save = new EventEmitter<ExpenseDTOInterface>();
  @Output() public cancel = new EventEmitter();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  public onCancel(): void {
    this.cancel.emit(null);
  }

  public onSave(): void {
    const dtoExpense = this.getExpenseDTO(this.form.value);
    this.save.emit(dtoExpense);
  }

  public buildForm(): void {
    this.form = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+.?\d*$/)
      ]),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null),
    });
  }

  public getExpenseDTO(formValue: ExpenseDTOInterface): ExpenseDTOInterface {
    const DATE_FORMAT = 'YYYY-MM-DD';
    const date = formValue.date || moment().format(DATE_FORMAT);

    const dtoExpense: ExpenseDTOInterface = {
      ...this.form.value,
      date: moment(date, DATE_FORMAT).format()
    };

    return dtoExpense;
  }

  get descriptionField() {
    return this.form.get('description');
  }

  get amountField() {
    return this.form.get('amount');
  }
}
