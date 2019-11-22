import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ExpenseFormComponent } from './expense-form.component';
import { MockExpenseDTO } from 'src/app/models/expense/expense.mock';
import { By } from '@angular/platform-browser';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpenseFormComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;

    component.form = formBuilder.group({
      description: null,
      amount: null,
      date: null
    });

    fixture.detectChanges();
  });

  it('onSave should create', () => {
    expect(component).toBeTruthy();
  });

  it('buildForm should create form group instance', () => {
    component.buildForm();
    expect(component.form).toBeDefined();
  });

  it('getExpenseDTO should return ExpenseDTO with "date" field defined', () => {
    component.form.setValue({
      description: 'test',
      amount: 10,
      date: null
    });

    const expenseDTO = component.getExpenseDTO(MockExpenseDTO);

    expect(expenseDTO.date).toBeDefined();
  });

  it('onCancel should call cancel.emit', () => {
    spyOn(component.cancel, 'emit');

    component.onCancel();

    expect(component.cancel.emit).toHaveBeenCalled();
  });

  it('onSave should call save.emit', () => {
    spyOn(component.save, 'emit');

    component.onSave();

    expect(component.save.emit).toHaveBeenCalled();
  });

  it('should show invalid message to required validation with description equal to null', () => {
    component.form.setValue({
      description: null,
      amount: 10,
      date: null
    });

    expect(component.form.get('description').hasError('required')).toBe(true);
  });

  it('should show invalid message to pattern validation with amount value is not a number', () => {
    component.form.setValue({
      description: 'test',
      amount: 'test',
      date: null
    });

    expect(component.form.get('amount').hasError('pattern')).toBe(true);
  });

  it('should show invalid message to pattern validation with amount value is not a number', () => {
    component.form.setValue({
      description: 'test',
      amount: 'test',
      date: null
    });

    component.form.get('amount').markAsDirty();

    fixture.detectChanges();

    const de = fixture.debugElement.queryAll(By.css('.errors'));

    const element = de[0].nativeElement;

    expect(element.textContent).toContain('* El valor no es valido (solo numeros)');
  });
});
