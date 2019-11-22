
import * as moment from 'moment';

import { TestBed } from '@angular/core/testing';

import { ExpenseService, APP_LABEL } from './expense.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Injectable } from '@angular/core';
import { MockExpense, MockExpenseDTO } from 'src/app/models/expense/expense.mock';

@Injectable()
export class MockLocalStorageService {
    get() { }
    set() { }
}


describe('ExpenseService', () => {
  let expenseService: ExpenseService;
  let localStorageService: LocalStorageService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ExpenseService,
        { provide: LocalStorageService, useClass: MockLocalStorageService },
      ]
    });


    expenseService = TestBed.get(ExpenseService);
    localStorageService = TestBed.get(LocalStorageService);
  } );

  it('should be created and have default state', () => {
    expect(expenseService).toBeTruthy();
    expect(expenseService.expenses.length).toEqual(0);
    expect(expenseService.expensesCounter).toEqual(0);
  });

  it('getAll should return all expenses stored', () => {
    expenseService.expenses = [MockExpense];
    const result = expenseService.getAll();
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(MockExpense.id);
  });

  it('getAllSortedByDate should return all expenses stored ordered by date from most recent', () => {
    const now = moment().format();
    const yesterday = moment().subtract(1, 'days').format();
    const mockExpenses = [
      { ...MockExpense, id: 1, date: yesterday },
      { ...MockExpense, id: 2, date: now },
    ];

    expenseService.expenses = mockExpenses;
    const result = expenseService.getAllSortedByDate();
    expect(result[0].id).toEqual(2);
  });

  it('create should create an expense and add it to the state.', () => {
    expenseService.create(MockExpenseDTO);
    expect(expenseService.expenses.length).toEqual(1);
    expect(expenseService.expensesCounter).toEqual(1);
  });

  it('saveState should call localStorageService.set with current expenseService state', () => {
    spyOn(localStorageService, 'set');

    expenseService.saveState();

    expect(localStorageService.set).toHaveBeenCalled();
    expect(localStorageService.set).toHaveBeenCalledWith(APP_LABEL, {
      expenses: expenseService.expenses,
      expensesCounter: expenseService.expensesCounter
    });
  });
});
