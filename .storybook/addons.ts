import '@storybook/addon-notes/register';
import '@storybook/addon-viewport/register';
import { addons } from '@storybook/addons';

import { create } from '@storybook/theming/create';

const myTheme = create({
  base: 'light',

  brandTitle: 'Personal Financial Logger',
  brandUrl: 'https://apinto-angular-expense-control.firebaseapp.com/',
  brandImage: '/logo_with_title.png',
});

addons.setConfig({
  theme: myTheme
});
