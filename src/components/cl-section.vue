<template>
  <view class="cl-section">
    <view class="left">
      <div class="decoration"></div>
      <div class="title">{{ title }}</div>
    </view>
    <view class="right">
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.cl-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .decoration {
      margin-right: 7rpx;
      width: 15rpx;
      height: 34rpx;
      background-color: #409eff;
    }
    .title {
      font-weight: 600;
    }
  }
}
</style>
