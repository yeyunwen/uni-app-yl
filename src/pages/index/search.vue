<template>
  <view class="search">
    <div class="search-content">
      <uni-search-bar :focus="true" v-model="searchValue"> </uni-search-bar>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
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
.search-content {
  padding: $content-padding;
}
</style>
