<template>
    <div class="app-home">
      <x-header :left-options="{showBack: false}"  class="app-header">
        <span slot="left" class="head-date"><span>22</span>Oct.2020</span>
        <span slot="right" class="head-site">上海.多云 19℃</span>
      </x-header>
    </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'home',
  components: {
    XHeader
  }
}
</script>

<style scoped lang="less">
@import '../style/config';
.app-home {
  width: 100%;
  height: 100%;
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: solid 1px @gray-grade-9;
    span {
      &.head-date {
        font-size: @font-size-sm;
        color: @font-gray-normal;
        span {
          font-size: @font-size-lg;
          font-weight: bold;
          margin-right: 5px;
        }
      }
      &.head-site {
        font-size: @font-size-sm;
        color: @font-gray-light;
      }
    }
  }
}
</style>
