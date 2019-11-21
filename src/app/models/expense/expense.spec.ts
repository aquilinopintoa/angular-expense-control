import { Expense } from './expense';
import { MockExpense } from './expense.mock';

describe('Expense', () => {
  it('should create an instance', () => {
    expect(new Expense(MockExpense)).toBeTruthy();
  });
});
