<template>
  <view class="cl-info tile">
    <image
      :src="infoData.imgUrl ? infoData.imgUrl : '/static/images/avatar.png'"
      mode="scaleToFill"
    />
    <view class="content">
      <view class="name">{{ infoData.name }}</view>
      <view class="desc">{{ infoData.desc }}</view>
    </view>
    <view class="right">{{ infoData.right }}</view>
  </view>
</template>

<script>
export default {
  props: {
    infoData: {
      type: Object,
      validator(value) {
        return typeof value.name === "string" && typeof value.desc === "string";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cl-info {
  display: flex;
  align-items: center;
  padding: 20rpx;
  image {
    margin-right: 25rpx;
    width: 100rpx;
    height: 100rpx;
  }
  .content {
    flex: 1;
    .name {
      margin-bottom: 10rpx;
      font-size: 18px;
      font-weight: 600;
    }
    .desc {
      font-size: 12px;
      color: #797979;
    }
  }
  .right {
    align-self: start;
    font-size: 12px;
    color: #797979;
  }
}
</style>
