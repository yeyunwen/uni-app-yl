<template>
  <view class="family">
    <cl-nav-bar title="我的家人" leftIcon></cl-nav-bar>
    <view class="family-content">
      <view class="add" @tap="goToAdd()">
        <image src="/static/images/bg-2.png" mode="aspectFill" />
      </view>
      <view class="member-list">
        <view
          v-for="(item, index) in memberList"
          :key="index"
          @tap="goToAdd(item.desc)"
          class="member-item"
        >
          <cl-info :infoData="item"></cl-info>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      memberList: [
        {
          name: "万丽",
          desc: "4789856430971352",
          relation: "",
          imgUrl: "",
        },
        {
          name: "黎磊",
          desc: "4789856430971352",
          relation: "",
          imgUrl: "",
        },
        {
          name: "毛伟",
          desc: "4789856430971352",
          relation: "",
          imgUrl: "",
        },
        {
          name: "贺明",
          desc: "4789856430971352",
          relation: "",
          imgUrl: "",
        },
        {
          name: "孙霞",
          desc: "4789856430971352",
          relation: "",
          imgUrl: "",
        },
        {
          name: "江秀英",
          desc: "4789856430971352",
          relation: "",
          imgUrl: "",
        },
      ],
    };
  },
  methods: {
    goToAdd(id) {
      uni.navigateTo({
        url: `/pages/my/family/add?id=${id}`,
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
.family {
  background-image: url(http://localhost:3000/static/images/bg-1.jpg);
  background-size: 100% 100%;
  .family-content {
    padding: $content-padding;
    .add {
      margin-bottom: 30rpx;
      border-radius: 16rpx;
      border: 2rpx solid #0985f2;
      background: #c9e7ff;
      image {
        display: block;
        width: 715rpx;
        height: 185rpx;
      }
    }
    .member-list {
      .member-item {
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>
