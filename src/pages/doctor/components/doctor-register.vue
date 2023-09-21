<template>
  <view class="register">
    <view class="register-list">
      <view
        class="register-item"
        v-for="(item, index) in registerList"
        :key="index"
      >
        <view class="left">
          <text class="datetime">{{ item.datetime }}</text>
          <text class="day">{{ item.day }}</text>
          <text class="btn">{{ item.cnDay }}</text>
        </view>
        <view class="right">
          <view class="btn">{{ item.state }}</view>
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
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
