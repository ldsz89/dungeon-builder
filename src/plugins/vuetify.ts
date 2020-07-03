import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import {darkTheme, lightTheme} from './themes';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    options: {
      customProperties: true,
    },
  },
});
