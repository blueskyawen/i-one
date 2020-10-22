<template>
  <div class="one-app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    setTimeout(() => {
      this.$router.push('/main')
    }, 1000)
  }
}
</script>

<style scoped lang="less">
@import './style/config';
@import '~vux/src/styles/reset.less';
.one-app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  .v-enter, .v-leave-to {
    opacity: 0;
  }
  .v-enter-active, .v-leave-active {
    transition: opacity 1s;
  }
}
</style>
