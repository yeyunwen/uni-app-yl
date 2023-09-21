<template>
  <view>
    <view class="content">
      <div class="video">
        <div class="video-header">
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
        </div>
        <div class="video-content">
          <video
            src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
          />
        </div>
      </div>
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
  name: "more-science",
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
