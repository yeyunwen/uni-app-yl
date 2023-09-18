<template>
  <view class="cl-tile">
    <view class="header">
      <cl-section :title="title">
        <!-- <slot name="right">
          <view slot="right"></view>
        </slot> -->
      </cl-section>
    </view>
    <view class="content">
      <slot name="default"></slot>
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
.cl-tile {
  border-radius: 10rpx;
  background-color: #fff;
  .header {
    padding-top: 20rpx;
  }
  .content {
    padding: 15rpx;
  }
}
</style>
