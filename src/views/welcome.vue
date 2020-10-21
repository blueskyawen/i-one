<template>
  <div class="app-welcome">
    <div class="title">
      <img src="../assets/welcome1.png">
      <img src="../assets/welcome2.png">
    </div>
    <div class="foot">i-one<span>@ 一个</span></div>
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
  width: 100%;
  height: 100%;
  > .title {
    text-align: center;
    font-size: @font-size-xl;
    line-height: 36px;
    width: 50%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%) translateY(120px);
    > img {
      &:first-child {
        margin-left: -35px;
      }
      &:last-child {
        margin-left: 35px;
      }
    }
  }
  > .foot {
    width: inherit;
    text-align: center;
    font-size: @default-font-size;
    position: fixed;
    bottom: 80px;
    span {
      font-size: @font-size-lg;
      margin-left: 10px;
    }
  }
}
</style>
