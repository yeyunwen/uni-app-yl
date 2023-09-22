<template>
  <view class="collect">
    <view class="collect-list">
      <view v-for="item in collectList" :key="item.id" class="collect-item">
        <cl-doctor :doctorData="item"></cl-doctor>
      </view>
    </view>
  </view>
</template>

<script>
import { getCollectDoctors } from "@api/user";

export default {
  data() {
    return {
      collectList: [],
    };
  },
  created() {
    this.getCollectDoctors();
  },
  methods: {
    getCollectDoctors() {
      getCollectDoctors().then((res) => {
        this.collectList = res.data;
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}
.collect {
  padding: $content-padding;
}
</style>
