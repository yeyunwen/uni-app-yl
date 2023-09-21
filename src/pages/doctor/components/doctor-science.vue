<template>
  <view>
    <view class="content">
      <view class="article">
        <view class="left">
          <image src="https://picsum.photos/225/145" mode="scaleToFill" />
        </view>
        <view class="right">
          <view class="title">{{ scienceData.title }}</view>
          <view class="tags">
            <text
              class="tags-item"
              v-for="(item, index) in scienceData.tags"
              :key="index"
            >
              #{{ item }}
            </text>
          </view>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="left">
        <text class="left-item">
          <text class="value">{{ scienceData.readNum }}</text>
          <text class="label">阅读数</text>
        </text>
        <text class="left-item">
          <text class="value">{{ scienceData.likeNum }}</text>
          <text class="label">点赞数</text>
        </text>
      </view>
      <view class="right">
        {{ scienceData.createTime }}
      </view>
    </view>
  </view>
</template>

<script>
const scienceData = {
  id: 1,
  doctor: "胡晓丹",
  hospital: "曹县人民医院",
  job: "副主任医生",
  department: "妇科",
  title: "有疾病需要及时医治有疾病需要及时医治有疾病需要及时医治",
  type: 0, // 0：文章 1：视频
  tags: ["头晕头痛", "感冒咳嗽"],
  readNum: 2000,
  likeNum: 343,
  createTime: "2023-09-19 09:21:33",
  avatarUrl: "/static/images/avatar.png",
};
export default {
  name: "doctor-science",
  data() {
    return {
      scienceData,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 30rpx;
  .tags {
    color: $color-primary;
    .tags-item {
      margin-right: 15rpx;
    }
  }
  .article {
    display: flex;
    align-items: center;
    .left {
      image {
        display: block;
        margin-right: 15rpx;
        width: 225rpx;
        height: 145rpx;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .video {
    .video-content {
      margin-top: 20rpx;
    }
    video {
      width: 100%;
    }
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .left {
    .left-item {
      margin-right: 20rpx;
      .value {
        margin-right: 10rpx;
      }
      .label {
        color: $text-color-grey;
      }
    }
  }
  .right {
    color: $text-color-grey;
  }
}
</style>
