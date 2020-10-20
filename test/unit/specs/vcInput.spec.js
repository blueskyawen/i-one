import Vue from 'vue'
import vcinput from '@/components/vc-cat/vc-input'
import { getLoaderDom } from '../spec-util'

describe('test vc-input', () => {
  it('props should object', () => {
    expect(typeof vcinput.props).toBe('object')
  })
  it('data should function', () => {
    expect(typeof vcinput.data).toBe('function')
  })
  it('instance is correct when value props', () => {
    expect(getLoaderDom(vcinput,{value: 'Hello'},".nc-form-group-item > input","value"))
      .toBe('Hello')
    expect(getLoaderDom(vcinput,{value: 'World'},".nc-form-group-item > input","value"))
      .toBe('World')
  })
  it('update input value', (done) => {
    const Constructor = Vue.extend(vcinput)
    const vm = new Constructor({propsData:{value: 'Vuejs'}}).$mount()
    expect(vm.$el.querySelector('.nc-form-group-item > input').value).toBe('Vuejs')
    vm.value = 'taiping'
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.nc-form-group-item > input').value).toBe('taiping')
      done()
    })
  })
})
