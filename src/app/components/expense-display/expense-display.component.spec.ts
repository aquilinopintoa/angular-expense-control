import * as moment from 'moment';
import * as numeral from 'numeral';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ExpenseDisplayComponent } from './expense-display.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { MockExpense } from 'src/app/models/expense/expense.mock';

describe('ExpenseDisplayComponent', () => {
  let component: ExpenseDisplayComponent;
  let fixture: ComponentFixture<ExpenseDisplayComponent>;

  // load a locale to app
  registerLocaleData(localeEs);

  // load a locale to numeral package
  numeral.register('locale', 'es', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    currency: {
        symbol: '€'
    }
  });

  // switch between locales
  numeral.locale('es');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ExpenseDisplayComponent);
    component = fixture.componentInstance;

    component.expense = MockExpense;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "date" attribute with "dd/MM" format', () => {
    const de = fixture.debugElement.query(By.css('.expense > :first-child'));
    const element = de.nativeElement;
    expect(element.textContent).toEqual(moment(MockExpense.date).format('DD/MM'));
  });


  it('should show "description" attribute', () => {
    const de = fixture.debugElement.query(By.css('.expense > .description'));
    const element = de.nativeElement;
    expect(element.textContent).toEqual(MockExpense.description);
  });

  it('should show "amount" attribute with EUR-es currency', () => {
    // TODO :: must be improved
    const de = fixture.debugElement.query(By.css('.expense > :last-child'));
    const element = de.nativeElement;
    const formattedMockAmount = numeral(MockExpense.amount).format('0,0.0');

    expect(element.textContent).toContain(formattedMockAmount);
    expect(element.textContent).toContain('€');
  });
});
