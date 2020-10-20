<template>
  <div class="app-welcome">
    <div class="title">复杂的世界里一个就够了</div>
    <div class="foot">i-one <span>一个</span></div>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style scoped lang="less">
@import '../style/config';
.app-welcome {

  display: flex;
  flex-direction: column;
  > .title {
    width: inherit;
    text-align: center;
    font-size: @font-size-xl;
  }
  > .foot {
    width: inherit;
    text-align: center;
    font-size: @font-size-sm;
    span {
      font-size: @default-font-size;
    }
  }
}
</style>
