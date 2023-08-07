import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const light = {
  dark: false,
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    primary: '#1976d2',
    secondary: '#f50057',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#0288d1',
    success: '#2e7d32',
  },
};

const dark = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#121212',
    primary: '#1976d2',
    secondary: '#f50057',
    error: '#d32f2f',
    warning: '#ffa726',
    info: '#29b6f6',
    success: '#66bb6a',
  },
};

export default () =>
  createVuetify({
    icons: {
      sets: { mdi },
      aliases,
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark,
      },
      variations: {
        colors: ['primary', 'secondary', 'error', 'warning', 'success', 'info'],
        lighten: 2,
        darken: 2,
      },
    },
  });
