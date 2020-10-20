import Vue from "vue"

export function getLoaderDom(component, propsData, selector, key) {
  const Constructor = Vue.extend(component)
  const vm = new Constructor({propsData:propsData}).$mount()
  return vm.$el.querySelector(`${selector}`)[key]
}
