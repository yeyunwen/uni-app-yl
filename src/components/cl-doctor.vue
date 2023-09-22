<template>
  <view class="doctor-item tile">
    <view class="avatar">
      <image src="/static/images/avatar.png" mode="scaleToFill" />
    </view>
    <view class="content">
      <view class="info">
        <view class="info-item1">
          <text class="name">{{ doctorData.name }}</text>
          <text class="title">{{ doctorData.job }}</text>
        </view>
        <view class="info-item2">
          <text class="address">{{ doctorData.hospital }}</text>
          <text class="line"></text>
          <text class="department">{{ doctorData.department }}</text>
        </view>
      </view>
      <view class="score">
        <view class="item">
          <view class="label">
            <image src="/static/images/star.png" mode="scaleToFill" />
          </view>
          <view class="value">{{ doctorData.score }}</view>
        </view>
        <view class="item">
          <view class="label">服务数</view>
          <view class="value">{{ doctorData.serviceNum }}</view>
        </view>
        <view class="item">
          <view class="label">好评率</view>
          <view class="value">{{ doctorData.goodCommentNum }}</view>
        </view>
      </view>
      <div class="speciality">
        <text>{{ doctorData.speciality }}</text>
      </div>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    doctorData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.doctor-item {
  display: flex;
  padding: 20rpx;
  margin-bottom: 20rpx;
  background: #fff;
  .avatar {
    margin-right: 20rpx;
    width: 80rpx;
    image {
      width: 80rpx;
      height: 80rpx;
    }
  }
  .content {
    flex: 1;
    font-size: 14px;
    .info {
      margin-bottom: 10rpx;
      color: #797979;
      .info-item1 {
        margin-bottom: 5rpx;
        .name {
          margin-right: 8rpx;
          font-size: 18px;
          color: #000;
        }
        .title {
        }
      }
      .info-item2 {
      }
    }
    .score {
      display: flex;
      image {
        width: 35rpx;
        height: 35rpx;
      }
      .item {
        display: flex;
        flex: 1;
        .label {
          margin-right: 5rpx;
          color: #797979;
        }
        .value {
          color: #2a78bf;
        }
      }
    }
    .speciality {
      color: #797979;
    }
  }
}
</style>
