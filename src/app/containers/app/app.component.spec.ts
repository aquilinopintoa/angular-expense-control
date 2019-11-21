import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from 'src/app/components/expense-form/expense-form.component';
import { ExpensesListComponent } from 'src/app/components/expenses-list/expenses-list.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ExpenseDisplayComponent } from 'src/app/components/expense-display/expense-display.component';
import { ExpenseService } from 'src/app/services/expense/expense.service';

describe('AppComponent', () => {
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
        ExpenseService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
