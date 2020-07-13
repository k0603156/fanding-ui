import HelloWorld from "./HelloWorld";
import Button from "./Button";

export const components = [HelloWorld, Button];

const install = function (Vue, opts={}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  HelloWorld,
  Button,
};
