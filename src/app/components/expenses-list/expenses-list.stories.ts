import { ExpenseDisplayComponent } from '../expense-display/expense-display.component';
import { ExpensesListComponent } from './expenses-list.component';
import * as moment from 'moment';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import * as markdown from './Readme.md';

registerLocaleData(localeEs);

storiesOf('Expense | Expenses List', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        ExpenseDisplayComponent,
      ]
    })
  )
  .add(
    'Standard',
    () => ({
      component: ExpensesListComponent,
      props: {
        expenses: [
          {
            amount: 100,
            date: moment().format(),
            description: 'Licencia PHP Storm 2019'
          },
          {
            amount: 120,
            date: moment().format(),
            description: 'Licencia PHP Storm 2020'
          },
          {
            amount: 130,
            date: moment().format(),
            description: 'Licencia PHP Storm 2021'
          }
        ]
      },
    }),
    { notes: {markdown} }
  );
