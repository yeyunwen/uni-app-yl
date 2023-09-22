<template>
  <view class="register">
    <view class="register-list">
      <view
        class="register-item"
        v-for="(item, index) in registerList"
        :key="index"
      >
        <view class="left" :class="[item.state > 0 ? '' : 'none']">
          <text class="left-item">{{ item.datetime }}</text>
          <text class="left-item">{{ item.day }}</text>
          <text class="left-item btn">{{ item.cnDay }}</text>
        </view>
        <view class="right" :class="[item.state > 0 ? '' : 'none']">
          <view class="btn">{{ item.state > 0 ? "预约" : "无号" }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const registerList = [
  {
    datetime: "2023-09-20",
    day: "周三",
    cnDay: "今天",
    state: 0,
  },
  {
    datetime: "2023-09-21",
    day: "周四",
    cnDay: "明天",
    state: 1,
  },
  {
    datetime: "2023-09-22",
    day: "周五",
    cnDay: "后天",
    state: 1,
  },
  {
    datetime: "2023-09-23",
    day: "周六",
    cnDay: "3天后",
    state: 1,
  },
];
export default {
  name: "doctor-register",
  data() {
    return {
      registerList,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  .register-list {
    .register-item {
      padding: 30rpx 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn {
        color: #ccc;
        padding: 5rpx 10rpx;
        border-radius: 10rpx;
        background-color: $bg-color-grey;
      }
      .left {
        &.none {
          color: #ccc;
        }
        .left-item {
          margin-right: 50rpx;
        }
      }
      .right {
        &.none .btn {
          color: #ccc;
          background-color: $bg-color-grey;
        }
        .btn {
          color: #fff;
          background-color: $color-primary;
        }
      }
    }
  }
}
</style>
