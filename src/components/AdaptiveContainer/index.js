import AdaptiveContainer from './src/AdaptiveContainer';

AdaptiveContainer.install = function (Vue) {
  Vue.component(AdaptiveContainer.name, AdaptiveContainer);
};

export default AdaptiveContainer;

