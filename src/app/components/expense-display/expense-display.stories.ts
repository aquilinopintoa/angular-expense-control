import { ExpenseDisplayComponent } from './expense-display.component';
import * as moment from 'moment';
import {registerLocaleData} from "@angular/common";
import localeEs from "@angular/common/locales/es";

export default { title: 'ExpenseDisplayComponent' }

registerLocaleData(localeEs);

export const withText = () => ({
  component: ExpenseDisplayComponent,
  props: {
    expense: {
      amount: 100,
      date: moment().format(),
      description: 'Test'
    },
  },
});
