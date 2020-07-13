import FandingUi from '../components';

export default {
  install: function(Vue) {
    Object.entries(FandingUi).map(([, value]) => {
        Vue.component(value.name, value);
      })
  }
};
