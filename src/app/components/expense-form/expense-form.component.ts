import * as moment from 'moment';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Expense } from '../../interfaces/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  @Output() public save = new EventEmitter<Expense>();
  @Output() public cancel = new EventEmitter();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  public onCancel(): void {
    this.cancel.emit(null);
  }

  public onSave(): void {
    this.save.emit(this.form.value);
  }

  private initForm(): void {
    this.form = new FormGroup({
      importe: new FormControl(null, Validators.required),
      concepto: new FormControl(null, Validators.required),
      fecha: new FormControl(null),
    });
  }
}
