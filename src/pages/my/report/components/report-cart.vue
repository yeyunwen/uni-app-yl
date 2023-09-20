<template>
  <view class="report-cart tile">
    <view class="header">
      <view class="left">申请时间：2023-09-13 09：23：13</view>
      <view class="right">
        <uni-icons type="right" size="18" />
      </view>
    </view>
    <view class="content">
      <view class="content-list">
        <view class="content-item">
          <text class="label">开单医生：</text>
          <text class="value">宿世伯</text>
        </view>
        <view class="content-item">
          <text class="label">患者名称：</text>
          <text class="value">石项</text>
        </view>
        <view class="content-item">
          <text class="label">患者年龄：</text>
          <text class="value">33岁</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.report-cart {
  padding: 30rpx 20rpx;
  font-size: 14px;
  background: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rpx;
  }
  .content {
    .content-list {
      .content-item {
        padding: 15rpx 0;
        .label {
          color: $text-color-grey;
        }
      }
    }
  }
}
</style>
