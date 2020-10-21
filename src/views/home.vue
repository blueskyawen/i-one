<template>
    <div class="app-home">
      <header>
        <x-header title="use prop:title"></x-header>
      </header>
      <article>
        啊啊啊啊啊
      </article>
      <footer>
        <tabbar>
          <tabbar-item>
            <img slot="icon" src="../assets/i-one.png">
            <span slot="label">Wechat</span>
          </tabbar-item>
          <tabbar-item show-dot>
            <img slot="icon" src="../assets/i-one.png">
            <span slot="label">Message</span>
          </tabbar-item>
          <tabbar-item selected link="/component/demo">
            <img slot="icon" src="../assets/i-one.png">
            <span slot="label">Explore</span>
          </tabbar-item>
          <tabbar-item badge="2">
            <img slot="icon" src="../assets/i-one.png">
            <span slot="label">News</span>
          </tabbar-item>
        </tabbar>
      </footer>
    </div>
</template>

<script>
import { XHeader, Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  name: 'home',
  components: {
    XHeader, Group, Cell, Tabbar, TabbarItem
  }
}
</script>

<style scoped lang="less">
.app-home {
  width: 100%;
  height: 100%;
  > header {
    position: fixed;
    top: 0;
    width: inherit;
  }
  > footer {
    position: fixed;
    bottom: 0;
    width: inherit;
  }
}
</style>
