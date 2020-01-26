import { ExpenseFormComponent } from './expense-form.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import * as markdown from './Readme.md';
import { ReactiveFormsModule } from "@angular/forms";

storiesOf('Expense | Expense Form', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
      ]
    })
  )
  .add(
    'Standard',
    () => ({
      component: ExpenseFormComponent,
      props: {},
    }),
    { notes: {markdown} }
  );
