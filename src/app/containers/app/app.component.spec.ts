import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from 'src/app/components/expense-form/expense-form.component';
import { ExpensesListComponent } from 'src/app/components/expenses-list/expenses-list.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ExpenseDisplayComponent } from 'src/app/components/expense-display/expense-display.component';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { By } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { MockExpenseDTO, MockExpense } from 'src/app/models/expense/expense.mock';

@Injectable()
export class MockExpenseService {
    getAll() { return []; }
    getAllSortedByDate() { return []; }
    create() { }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let expenseService: ExpenseService;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExpenseFormComponent,
        ExpensesListComponent,
        ExpenseDisplayComponent,
        HeaderComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: ExpenseService, useClass: MockExpenseService },
        LocalStorageService
      ]
    }).compileComponents();

    expenseService = TestBed.get(ExpenseService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('openExpenseForm', () => {
    it('should set isOpenedExpenseForm prop to true', () => {
      component.openExpenseForm();
      expect(component.isOpenedExpenseForm).toBeTruthy();
    });

    it('should show app-expense-form', () => {
      component.openExpenseForm();
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('app-expense-form'));
      expect(de).toBeTruthy();
    });
  });

  describe('closeExpenseForm', () => {
    it(' should isOpenedExpenseForm prop to false and not show app-expense-form', () => {
      component.closeExpenseForm();
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('app-expense-form'));
      expect(de).toBeFalsy();
      expect(component.isOpenedExpenseForm).toBeFalsy();
    });
  });

  describe('addExpense', () => {
    it('should call create from expenseService with expense data', () => {
      spyOn(expenseService, 'create');

      component.addExpense(MockExpenseDTO);

      expect(expenseService.create).toHaveBeenCalled();
      expect(expenseService.create).toHaveBeenCalledWith(MockExpenseDTO);
    });


    it('should call refresh method', () => {
      spyOn(component, 'refresh');

      component.addExpense(MockExpenseDTO);

      expect(component.refresh).toHaveBeenCalled();
    });
  });

  describe('refresh', () => {
    it('should set expenses prop from expenseService', () => {
      component.expenses = [MockExpense];

      component.refresh();

      expect(component.expenses.length).toEqual(0);
    });
  });
});
