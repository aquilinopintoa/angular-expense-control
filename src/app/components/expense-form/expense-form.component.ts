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
      importe: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+.?\d?$/)
      ]),
      concepto: new FormControl(null, Validators.required),
      fecha: new FormControl(null),
    });
  }

  public getExpenseDTO(formValue: ExpenseDTOInterface): ExpenseDTOInterface {
    const DATE_FORMAT = 'YYYY-MM-DD';
    const fecha = formValue.fecha || moment().format(DATE_FORMAT);

    const dtoExpense: ExpenseDTOInterface = {
      ...this.form.value,
      fecha: moment(fecha, DATE_FORMAT).format()
    };

    return dtoExpense;
  }

  get conceptoField() {
    return this.form.get('concepto');
  }

  get importeField() {
    return this.form.get('importe');
  }
}
