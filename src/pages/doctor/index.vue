<template>
  <view class="doctor">
    <cl-nav-bar title="医生详情" leftIcon></cl-nav-bar>
    <view class="doctor-content">
      <view class="doctor-info">
        <cl-doctor :doctorData="infoDetail"></cl-doctor>
      </view>
      <view class="tabs-container tile">
        <view class="tabs-header">
          <view
            class="tabs-header__item"
            v-for="item in tabList"
            :key="item.type"
            @click="changeType(item.type)"
            :class="[item.type === currentType ? 'active' : '']"
          >
            {{ item.text }}
          </view>
        </view>
        <view class="tabs-content">
          <template v-if="isComponent('doctor-consultation')">
            <doctor-consultation></doctor-consultation>
          </template>
          <template v-else-if="isComponent('doctor-science')">
            <doctor-science></doctor-science>
          </template>
          <template v-else-if="isComponent('doctor-register')">
            <doctor-register></doctor-register>
          </template>
        </view>
      </view>
      <view class="additional tile">
        <template v-if="isComponent('more-science')">
          <view class="more-science">
            <more-science></more-science>
          </view>
        </template>
      </view>
    </view>
  </view>
</template>

<script>
const tabList = [
  {
    text: "在线问诊",
    type: 0,
    componentsList: ["doctor-consultation"],
  },
  {
    text: "健康科普",
    type: 1,
    componentsList: ["doctor-science", "more-science"],
  },
  {
    text: "预约挂号",
    type: 2,
    componentsList: ["doctor-register"],
  },
];
import doctorConsultation from "./components/doctor-consultation.vue";
import doctorScience from "./components/doctor-science.vue";
import moreScience from "./components/more-science.vue";
import doctorRegister from "./components/doctor-register.vue";
import { getInfoDetail } from "@api/doctor";

export default {
  onLoad(options) {
    const { id } = options;
    this.getInfoDetail(id);
  },
  components: {
    doctorConsultation,
    doctorScience,
    moreScience,
    doctorRegister,
  },
  data() {
    return {
      currentType: 0,
      tabList,
      infoDetail: {},
    };
  },
  computed: {
    isComponent() {
      return (name) => {
        return tabList
          .find((i) => i.type === this.currentType)
          .componentsList.includes(name);
      };
    },
  },
  methods: {
    changeType(type) {
      this.currentType = type;
    },
    getInfoDetail(id) {
      getInfoDetail(id).then((res) => {
        this.infoDetail = res.data;
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}
</style>

<style lang="scss" scoped>
.doctor {
  background-image: url(http://localhost:3000/static/images/bg-1.jpg);
  background-size: 100% 100%;
  .doctor-content {
    padding: $content-padding;
    .tabs-container {
      margin-bottom: 20rpx;
      padding: 20rpx;
      font-size: 14px;
      .tabs-header {
        display: flex;
        margin-bottom: 20rpx;
        .tabs-header__item {
          flex: 1;
          padding: 10rpx 5rpx;
          font-weight: 500;
          text-align: center;
          border-bottom: 4rpx solid #fff;
          &.active {
            border-bottom: 4rpx solid $color-primary;
          }
        }
      }
    }
    .more-science {
      padding: 20rpx;
    }
  }
}
</style>
