<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <view class="navbar-btns navbar-left" @click="onLeftClick">
      <slot name="left">
        <uni-icons type="left" size="24" v-if="leftIcon" />
        <view class="navbar-btns-text" v-if="leftText.length > 0">
          {{ leftText }}
        </view>
      </slot>
    </view>
    <view class="title">{{ title }}</view>
    <view class="navbar-btns" @click="onRightClick">
      <slot name="right">
        <view class="navbar-btns-text" v-if="rightText.length > 0">
          {{ rightText }}
        </view>
      </slot>
    </view>
  </view>
</template>

<script>
const getVal = (val) => (typeof val === "number" ? val + "px" : val);
const { safeAreaInsets } = uni.getSystemInfoSync();

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    leftText: {
      type: String,
      default: "",
    },
    leftIcon: {
      type: Boolean,
      default: false,
    },
    rightText: {
      type: String,
      default: "",
    },
    height: {
      type: [String, Number],
      default: 44,
    },
  },
  data() {
    return {
      safeAreaInsets,
    };
  },
  methods: {
    onLeftClick() {
      uni.navigateBack();
    },
    onRightClick() {},
  },
};
</script>

<style lang="scss" scoped>
$nav-height: 44px;

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $content-padding-left-right;
  height: $nav-height;
  color: #000;
  position: relative;

  .navbar-btns {
    width: 120rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    height: $nav-height;
  }

  .navbar-left {
    justify-content: flex-start;
  }

  .title {
    flex: 1;
    text-align: center;
  }
}
</style>
