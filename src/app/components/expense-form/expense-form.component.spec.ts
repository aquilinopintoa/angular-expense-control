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
      concepto: null,
      importe: null,
      fecha: null
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

  it('getExpenseDTO should return ExpenseDTO with "fecha" field defined', () => {
    component.form.setValue({
      concepto: 'test',
      importe: 10,
      fecha: null
    });

    const expenseDTO = component.getExpenseDTO(MockExpenseDTO);

    expect(expenseDTO.fecha).toBeDefined();
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

  it('should show invalid message to required validation with concepto equal to null', () => {
    component.form.setValue({
      concepto: null,
      importe: 10,
      fecha: null
    });

    expect(component.form.get('concepto').hasError('required')).toBe(true);
  });

  it('should show invalid message to pattern validation with importe value is not a number', () => {
    component.form.setValue({
      concepto: 'test',
      importe: 'test',
      fecha: null
    });

    expect(component.form.get('importe').hasError('pattern')).toBe(true);
  });

  it('should show invalid message to pattern validation with importe value is not a number', () => {
    component.form.setValue({
      concepto: 'test',
      importe: 'test',
      fecha: null
    });

    component.form.get('importe').markAsDirty();

    fixture.detectChanges();

    const de = fixture.debugElement.queryAll(By.css('.errors'));

    const element = de[0].nativeElement;

    expect(element.textContent).toContain('* El valor no es valido (solo numeros)');
  });
});
