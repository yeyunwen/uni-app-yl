<template>
  <view class="message">
    <view class="message-list">
      <view class="message-item" v-for="item in infoList" :key="item.name">
        <cl-info :infoData="item"></cl-info>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      infoList: [
        {
          name: "刘若英",
          desc: "12312312312312",
          right: "2023.09.19 13:23",
        },
        {
          name: "刘若英",
          desc: "12312312312312",
          right: "2023.09.19 13:23",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}
</style>
<style lang="scss" scoped>
.message {
  padding: 20rpx;
  background-color: $bg-color-grey;
  .message-list {
    .message-item {
      margin-bottom: 20rpx;
    }
  }
}
</style>
