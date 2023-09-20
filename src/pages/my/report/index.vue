<template>
  <view class="report">
    <view class="report-list">
      <view v-for="(item, index) in 2" :key="index" class="report-item">
        <report-cart></report-cart>
      </view>
    </view>
  </view>
</template>

<script>
import reportCart from "./components/report-cart.vue";
export default {
  components: {
    reportCart,
  },
  data() {
    return {
      collectList: [],
    };
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}
.report {
  padding: $content-padding;
  .report-list {
    .report-item {
      margin-bottom: 20rpx;
    }
  }
}
</style>
