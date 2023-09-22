<template>
  <view class="register">
    <view class="register-content tile">
      <cl-section title="选择号源"></cl-section>
      <view class="register-list">
        <view
          class="register-item"
          v-for="(item, index) in registerList"
          :key="index"
        >
          <div class="register-item-btn">
            <text class="num">{{ item.num }}</text>
            <text>{{ item.time }}</text>
          </div>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const registerList = [
  {
    num: 1,
    time: "09:30-10:00",
  },
  {
    num: 2,
    time: "09:30-10:00",
  },
  {
    num: 3,
    time: "09:30-10:00",
  },
  {
    num: 4,
    time: "09:30-10:00",
  },
  {
    num: 5,
    time: "09:30-10:00",
  },
  {
    num: 6,
    time: "09:30-10:00",
  },
  {
    num: 7,
    time: "09:30-10:00",
  },
  {
    num: 8,
    time: "09:30-10:00",
  },
  {
    num: 9,
    time: "09:30-10:00",
  },
  {
    num: 10,
    time: "09:30-10:00",
  },
];
export default {
  data() {
    return {
      registerList,
    };
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}
.register {
  padding: $content-padding;
  .register-content {
    padding: 20rpx;
    .register-list {
      display: flex;
      padding: 20rpx 0;
      flex-wrap: wrap;
      .register-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20rpx;
        width: 50%;

        .register-item-btn {
          padding: 10rpx 20rpx;
          border-radius: 10rpx;
          background-color: $bg-color-grey;
          .num {
            margin-right: 20rpx;
          }
        }
      }
    }
  }
}
</style>
