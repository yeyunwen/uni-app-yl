<template>
  <view class="collect">
    <view class="collect-list">
      <view v-for="(item, index) in 2" :key="index" class="collect-item">
        <cl-doctor></cl-doctor>
      </view>
    </view>
  </view>
</template>

<script>
export default {
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
.collect {
  padding: $page-padding;
}
</style>
