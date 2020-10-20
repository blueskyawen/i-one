import Vue from 'vue'
import vcloading from '@/components/vc-cat/vc-loading'
import { getLoaderDom } from '../spec-util'

describe('test vc-loading', () => {
  it('props should object', () => {
    expect(typeof vcloading.props).toBe('object')
  })
  it('props.size should max', () => {
    expect(vcloading.props.size.default).toEqual('max')
  })
  it('instance is correct when no props', () => {
    expect(getLoaderDom(vcloading,{},".vc-loading > div","className"))
      .toMatch('spin-loading')
    expect(getLoaderDom(vcloading,{},".vc-loading .load-spin","className"))
      .toMatch('normal-load max-loading')
  })
  it('instance is correct when normal and min', () => {
    expect(getLoaderDom(vcloading,{type: 'normal', size: 'min'},".vc-loading > div","className"))
      .toMatch('spin-loading')
    expect(getLoaderDom(vcloading,{type: 'normal', size: 'min'},".vc-loading .load-spin","className"))
      .toMatch('normal-load min-loading')
  })
  it('instance is correct when clover and medium', () => {
    expect(getLoaderDom(vcloading,{type: 'clover', size: 'medium'},".vc-loading > div","className"))
      .toMatch('spin-loading')
    expect(getLoaderDom(vcloading,{type: 'clover', size: 'medium'},".vc-loading .load-spin","className"))
      .toMatch('clover-load medium-loading')
  })
  it('instance is correct when horizontal', () => {
    expect(getLoaderDom(vcloading,{type: 'horizontal'},".vc-loading > div","className"))
      .toMatch('horizon-loading')
    expect(getLoaderDom(vcloading,{type: 'horizontal'},".vc-loading > div","className"))
      .toMatch('max-loading')
  })
  it('instance is correct when horizontal and min', () => {
    expect(getLoaderDom(vcloading,{type: 'horizontal', size: 'min'},".vc-loading > div","className"))
      .toMatch('horizon-loading')
    expect(getLoaderDom(vcloading,{type: 'horizontal', size: 'min'},".vc-loading > div","className"))
      .toMatch('min-loading')
  })
})


