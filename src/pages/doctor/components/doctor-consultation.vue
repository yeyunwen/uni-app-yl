<template>
  <view class="consultation">
    <view
      class="consultation-item"
      v-for="(item, index) in consultationList"
      :key="index"
    >
      <cl-info :desc="item.desc">
        <template #name>
          <text class="name">{{ item.name }}</text>
          <text class="money">￥{{ item.money }}/次</text>
        </template>
        <template #right>
          <view class="btns" @click="goToConsultation()">
            去咨询
            <uni-icons type="right" color="#fff" size="14" />
          </view>
        </template>
      </cl-info>
    </view>
  </view>
</template>

<script>
const consultationList = [
  {
    name: "图文问诊",
    desc: "文字、图片方式和医生沟通",
    money: 9,
  },
  {
    name: "电话问诊",
    desc: "电话沟通简单便捷更安心",
    money: 9.9,
  },
  {
    name: "视频问诊",
    desc: "通过视频观察病因更加准确",
    money: 19.9,
  },
];
export default {
  name: "doctor-consultation",
  data() {
    return {
      consultationList,
    };
  },
  methods: {
    goToConsultation() {
      uni.navigateTo({
        url: "/pages/doctor/consultation",
      });
    },
  },
};
</script>

<style>
.cl-info .right {
  align-self: center !important;
}
</style>

<style lang="scss" scoped>
.name {
  font-size: 16px;
}
.money {
  font-size: 14px;
  color: red;
  font-weight: normal;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rpx 20rpx;
  color: #fff;
  background-color: $color-primary;
  border-radius: 30rpx;
}
</style>
