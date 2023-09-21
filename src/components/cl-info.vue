<template>
  <view class="cl-info tile">
    <template v-if="infoData">
      <image
        :src="infoData.imgUrl ? infoData.imgUrl : '/static/images/avatar.png'"
        mode="scaleToFill"
      />
      <view class="content">
        <view class="name">{{ infoData.name }}</view>
        <view class="desc">{{ infoData.desc }}</view>
      </view>
      <view class="right">
        <view v-if="infoData.right">{{ infoData.right }}</view>
        <view v-else>
          <slot name="right"></slot>
        </view>
      </view>
    </template>
    <template v-else>
      <image
        :src="imgUrl ? imgUrl : '/static/images/avatar.png'"
        mode="scaleToFill"
      />
      <view class="content">
        <view class="name">
          <slot name="name">{{ name }}</slot>
        </view>
        <view class="desc">
          <slot name="desc">{{ desc }}</slot>
        </view>
      </view>
      <view class="right">
        <view v-if="right">{{ right }}</view>
        <view v-else>
          <slot name="right"></slot>
        </view>
      </view>
    </template>
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
    imgUrl: {
      type: String,
    },
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    right: {
      type: String,
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
