import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 720,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        bg: '#fff',
        info: '#FFFBC8',
        button: '#FDD639',
        message: '#F2FBFF',
        green: '#B1E19B',
        blue: '#ACE2F8',
        text: '#333333',
      },
    },
  },
})
