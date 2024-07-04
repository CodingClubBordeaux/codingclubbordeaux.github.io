import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { Icon } from '@iconify/vue';

import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', Icon);
  },
} satisfies Theme;
