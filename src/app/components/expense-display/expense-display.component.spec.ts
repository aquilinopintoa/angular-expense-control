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

  it('should show "fecha" attribute with "dd/MM" format', () => {
    const de = fixture.debugElement.query(By.css('.expense > :first-child'));
    const element = de.nativeElement;
    expect(element.textContent).toEqual(moment(MockExpense.fecha).format('DD/MM'));
  });


  it('should show "concepto" attribute', () => {
    const de = fixture.debugElement.query(By.css('.expense > .concepto'));
    const element = de.nativeElement;
    expect(element.textContent).toEqual(MockExpense.concepto);
  });

  it('should show "importe" attribute with EUR-es currency', () => {
    // TODO :: must be improved
    const de = fixture.debugElement.query(By.css('.expense > :last-child'));
    const element = de.nativeElement;
    const formattedMockImporte = numeral(MockExpense.importe).format('0,0.0');

    expect(element.textContent).toContain(formattedMockImporte);
    expect(element.textContent).toContain('€');
  });
});
