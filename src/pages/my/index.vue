<template>
  <view class="my">
    <cl-nav-bar title="我的"></cl-nav-bar>
    <view class="my-content">
      <view class="user-info">
        <cl-info :infoData="infoData"></cl-info>
      </view>
      <view class="order">
        <cl-tile title="体检订单">
          <div class="order-list">
            <div
              v-for="(item, index) in orderList"
              :key="index"
              class="order-item"
            >
              <image :src="item.imgUrl" mode="scaleToFill" />
              <view>{{ item.text }}</view>
            </div>
          </div>
        </cl-tile>
      </view>
      <view class="serve">
        <cl-tile title="我的服务">
          <view class="serve-list">
            <view
              v-for="(item, index) in serveList"
              :key="index"
              @click="goToPage(item.path)"
              class="serve-item"
            >
              <view class="left">
                <image :src="item.imgUrl" mode="scaleToFill" />
                <text>{{ item.text }}</text>
              </view>
              <view class="right">
                <uni-icons type="right" size="20"></uni-icons>
              </view>
            </view>
          </view>
        </cl-tile>
      </view>
    </view>
  </view>
</template>

<script>
const orderList = [
  {
    imgUrl: "/static/images/my/1.png",
    text: "待支付",
  },
  {
    imgUrl: "/static/images/my/2.png",
    text: "待预约",
  },
  {
    imgUrl: "/static/images/my/3.png",
    text: "待体检",
  },
  {
    imgUrl: "/static/images/my/4.png",
    text: "已体检",
  },
];
const serveList = [
  {
    text: "优惠券",
    imgUrl: "/static/images/my/5.png",
  },
  {
    text: "收藏医生",
    imgUrl: "/static/images/my/6.png",
    path: "/pages/my/collect",
  },
  {
    text: "报告解读",
    imgUrl: "/static/images/my/7.png",
    path: "/pages/my/report/index",
  },
  {
    text: "我的家人",
    imgUrl: "/static/images/my/8.png",
    path: "/pages/my/family/index",
  },
  {
    text: "我的发票",
    imgUrl: "/static/images/my/9.png",
  },
];
export default {
  data() {
    return {
      infoData: {
        name: "王二狗",
        desc: "请完善资料 为您提供更好的服务~",
      },
      orderList,
      serveList,
    };
  },
  methods: {
    goToPage(path) {
      if (!path) {
        uni.showToast({
          title: "功能开发中",
          icon: "none",
        });
        return;
      }
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
  background-image: url(http://localhost:3000/static/images/bg-1.jpg);
  background-size: 100% 100%;
}
::v-deep .cl-info {
  background: transparent;
}
</style>

<style lang="scss" scoped>
.my {
  .my-content {
    padding: 0 34rpx;
    > view {
      margin-bottom: 20rpx;
    }
    .order {
      .order-list {
        display: flex;
        font-size: 14px;
        .order-item {
          flex: 1;
          text-align: center;
          image {
            width: 50rpx;
            height: 50rpx;
          }
        }
      }
    }
    .serve {
      .serve-list {
        .serve-item {
          display: flex;
          justify-content: space-between;
          padding: 10rpx 0;
          font-size: 14px;
          .left {
            display: flex;
            align-items: center;
            image {
              width: 50rpx;
              height: 50rpx;
              margin-right: 10rpx;
            }
          }
        }
      }
    }
  }
}
</style>
