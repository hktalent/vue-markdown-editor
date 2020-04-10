// This file is auto generated by build/build-entry.js
import Component from './preview.vue';
import { setGlobal } from '@/utils/global';

const version = '1.0.6';

const install = (Vue) => {
  Vue.component(Component.name, Component);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

Component.version = version;
Component.install = install;
Component.useTheme = function (themeConfig) {
  setGlobal('theme', themeConfig);
};

export default Component;
