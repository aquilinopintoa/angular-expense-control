import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDisplayComponent } from '../expense-display/expense-display.component';
import { ExpensesListComponent } from './expenses-list.component';
import { Expense } from 'src/app/models/expense/expense';
import { MockExpense } from 'src/app/models/expense/expense.mock';
import { By } from '@angular/platform-browser';

describe('ExpensesListComponent', () => {
  let component: ExpensesListComponent;
  let fixture: ComponentFixture<ExpensesListComponent>;

  const expensesMock = [
    MockExpense,
    MockExpense
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpensesListComponent,
        ExpenseDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "No hay gastos" message if there are no expenses', () => {
    const de = fixture.debugElement.query(By.css('span'));
    const element = de.nativeElement;

    expect(element.textContent).toEqual('No hay gastos');
  });

  it('should show all expenses', () => {
    component.expenses = expensesMock;

    fixture.detectChanges();

    const de = fixture.debugElement.queryAll(By.css('app-expense-display'));

    expect(de.length).toEqual(2);
  });

  it('updateHasExpenses should update hasExpenses prop from expenses prop', () => {
    component.expenses = expensesMock;

    component.updateHasExpenses();

    expect(component.hasExpenses).toEqual(true);
  });

  it('ngOnChange should call updateHasExpenses', () => {
    spyOn(component, 'updateHasExpenses');

    component.ngOnChanges({});

    expect(component.updateHasExpenses).toHaveBeenCalled();
  });
});
