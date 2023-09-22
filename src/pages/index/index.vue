<template>
  <view class="index">
    <cl-nav-bar title="问医生"></cl-nav-bar>

    <view class="index-container">
      <view class="search" @click="goToSearch()">
        <uni-icons type="search" size="20" />
        <!-- <input v-model="searchVal" /> -->
      </view>

      <view class="fast">
        <view class="fast-item">
          <image src="/static/images/fast/1.png" mode="scaleToFill" />
        </view>
        <view class="fast-item">
          <image src="/static/images/fast/2.png" mode="scaleToFill" />
          <image src="/static/images/fast/3.png" mode="scaleToFill" />
        </view>
      </view>

      <view class="module">
        <cl-tile title="找医生">
          <view class="module-list">
            <view
              class="module-item"
              v-for="item in moduleList"
              :key="item.path"
            >
              <image :src="item.imgUrl" mode="scaleToFill" />
              <view class="module-name">{{ item.text }}</view>
            </view>
          </view>
        </cl-tile>
      </view>

      <view>
        <swiper class="swiper tile" circular ndicator-dots autoplay>
          <swiper-item v-for="(item, index) in swiperList" :key="index">
            <image :src="item.url" class="swiper-item tile"></image>
          </swiper-item>
        </swiper>
      </view>

      <view class="doctor-list">
        <view
          class="doctor-item"
          v-for="(item, index) in 4"
          :key="index"
          @click="goToDetail"
        >
          <cl-doctor></cl-doctor>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { moduleList } from "@/common/constant";

const swiperList = [
  {
    url: "https://picsum.photos/694/131",
  },
  {
    url: "https://picsum.photos/694/131",
  },
  {
    url: "https://picsum.photos/694/131",
  },
];

export default {
  data() {
    return {
      searchVal: "",
      moduleList,
      swiperList,
    };
  },
  methods: {
    goToDetail() {
      uni.navigateTo({
        url: "/pages/doctor/index",
      });
    },
    goToSearch() {
      uni.navigateTo({
        url: "/pages/index/search",
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
.tile {
  border-radius: 10rpx;
  background-color: #fff;
}
.index {
  background-image: url(http://localhost:3000/static/images/bg-1.jpg);
  background-size: 100% 100%;
  .index-container {
    padding: 0 34rpx;

    > view {
      margin-bottom: 10px;
    }
  }
  .search {
    display: flex;
    align-items: center;
    padding-left: 10rpx;
    height: 56rpx;
    border: 2rpx solid #2a78bf;
    border-radius: 10px;
  }
  .fast {
    display: flex;
    .fast-item {
      flex: 1;
      image {
        display: block; // 小程序 image跟view标签上下会有间隙
        width: 100%;
        height: 223rpx;
      }
      &:nth-child(2) {
        margin-left: 10rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        image {
          height: 103rpx;
        }
      }
    }
  }
  .module-list {
    display: flex;
    flex-wrap: wrap;
    .module-item {
      margin-bottom: 8px;
      width: 20%;
      text-align: center;
      font-size: 12px;
      image {
        width: 45rpx;
        height: 45rpx;
        margin-bottom: 8rpx;
      }
    }
  }
  .swiper {
    height: 131rpx;
    .swiper-item {
      width: 100%;
      height: 131rpx;
    }
  }

  .doctor-list {
  }
}
</style>
