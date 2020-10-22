<template>
  <div class="app-one">
    <view-box body-padding-top="46px" body-padding-bottom="55px">
      <router-view></router-view>
      <tabbar slot="bottom" class="app-tabbar">
        <tabbar-item selected>
          <x-icon slot="icon" type="ios-home-outline"></x-icon>
          <x-icon slot="icon-active" type="ios-home"></x-icon>
          <span slot="label" class="tabbar-item-label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <x-icon slot="icon" type="ios-circle-outline"></x-icon>
          <x-icon slot="icon-active" type="ios-circle-filled"></x-icon>
          <span slot="label" class="tabbar-item-label">发现</span>
        </tabbar-item>
        <tabbar-item>
          <x-icon slot="icon" type="ios-book-outline"></x-icon>
          <x-icon slot="icon-active" type="ios-book"></x-icon>
          <span slot="label" class="tabbar-item-label">连载</span>
        </tabbar-item>
        <tabbar-item>
          <x-icon slot="icon" type="ios-person-outline"></x-icon>
          <x-icon slot="icon-active" type="ios-person"></x-icon>
          <span slot="label" class="tabbar-item-label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  name: 'one',
  components: {
    ViewBox, Group, Cell, Tabbar, TabbarItem
  }
}
</script>

<style scoped lang="less">
@import '../style/config';
.app-one {
  width: 100%;
  height: 100%;
  .app-tabbar {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .weui-tabbar__item {
      text-decoration: none;
      .tabbar-item-label {
        color: @font-gray-light;;
        font-size: @font-size-sm;
        position: relative;
        top: -5px;
      }
      &.weui-bar__item_on {
        .tabbar-item-label {
          color: @font-gray-dark;;
          font-size: @font-size-sm;
        }
      }
    }
  }
}
</style>
