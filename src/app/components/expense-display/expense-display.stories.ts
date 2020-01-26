import { ExpenseDisplayComponent } from './expense-display.component';
import * as moment from 'moment';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { storiesOf } from '@storybook/angular';
import * as markdown from './Readme.md';

registerLocaleData(localeEs);

storiesOf('Expense | Expense Display', module)
  .add(
    'Standard',
    () => ({
      component: ExpenseDisplayComponent,
      props: {
        expense: {
          amount: 100,
          date: moment().format(),
          description: 'Licencia PHP Storm'
        },
      },
    }),
    { notes: {markdown} }
  );
