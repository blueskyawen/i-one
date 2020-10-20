<template>
  <div class="one-app">
    <transition mode="out-in">
      <component :is="page"></component>
    </transition>
  </div>
</template>

<script>
import home from './views/home'
import welcome from './views/welcome'
export default {
  name: 'App',
  data () {
    return {
      page: 'welcome'
    }
  },
  mounted () {
    setTimeout(() => {
      this.page = 'home'
    }, 500)
  },
  components: {
    home, welcome
  }
}
</script>

<style scoped lang="less">
@import './style/config';
.one-app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  .v-enter, .v-leave-to {
    opacity: 0;
  }
  .v-enter-active, .v-leave-active {
    transition: opacity 2s;
  }
}
</style>
