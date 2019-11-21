import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './containers/app/app.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpenseDisplayComponent } from './components/expense-display/expense-display.component';
import { HeaderComponent } from './components/header/header.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ExpenseService } from './services/expense/expense.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    ExpensesListComponent,
    ExpenseDisplayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    ExpenseService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }