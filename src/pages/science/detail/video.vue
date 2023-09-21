<template>
  <view class="video">
    <video
      src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
    ></video>
    <view class="video-content">
      <view class="title">{{ detailData.title }}</view>
      <view class="doctor-info">
        <cl-info :name="detailData.doctor">
          <template #desc>
            <view class="desc">
              <text class="desc-item">{{ detailData.hospital }}</text>
              <view class="line"></view>
              <text class="desc-item">{{ detailData.job }}</text>
              <view class="line"></view>
              <text class="desc-item">{{ detailData.department }}</text>
            </view>
          </template>
        </cl-info>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      detailData: {
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .tile {
  background-color: #eee !important;
}
.video {
  video {
    width: 100%;
  }
  .video-content {
    padding: $content-padding;
    .title {
      font-weight: 600;
      margin-bottom: 20rpx;
    }
    .name {
      font-size: 18px;
      font-weight: 600;
    }
    .desc {
      font-size: 14px;
    }
  }
}
</style>
