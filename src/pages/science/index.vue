<template>
  <view class="science">
    <view class="science-header">
      <scroll-view class="type-list" scroll-x enable-flex>
        <text
          v-for="item in typeList"
          :key="item.value"
          :class="['type-item', currenntType === item.value ? 'active' : '']"
          @click="changeType(item.value)"
        >
          {{ item.text }}
        </text>
      </scroll-view>
    </view>
    <view class="science-content">
      <view class="science-list">
        <view
          class="science-item tile"
          v-for="item in scienceList"
          :key="item.id"
        >
          <view class="header">
            <image :src="item.avatarUrl" mode="scaleToFill" />
            <view class="content">
              <view class="name">{{ item.doctor }}</view>
              <view class="desc">
                <text class="desc-item">{{ item.hospital }}</text>
                <view class="line"></view>
                <text class="desc-item">{{ item.job }}</text>
                <view class="line"></view>
                <text class="desc-item">{{ item.department }}</text>
              </view>
            </view>
            <view class="right"></view>
          </view>
          <view class="content">
            <template v-if="item.type === 0">
              <view class="article">
                <view class="left">
                  <image
                    src="https://picsum.photos/225/145"
                    mode="scaleToFill"
                  />
                </view>
                <view class="right">
                  <view class="title">{{ item.title }}</view>
                  <view class="tags">
                    <text
                      class="tags-item"
                      v-for="(item, index) in item.tags"
                      :key="index"
                    >
                      #{{ item }}
                    </text>
                  </view>
                </view>
              </view>
            </template>
            <template v-else>
              <div class="video">
                <div class="video-header">
                  <view class="title">{{ item.title }}</view>
                  <view class="tags">
                    <text
                      class="tags-item"
                      v-for="(item, index) in item.tags"
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
            </template>
          </view>
          <view class="footer">
            <view class="left">
              <text class="left-item">
                <text class="value">{{ item.readNum }}</text>
                <text class="label">阅读数</text>
              </text>
              <text class="left-item">
                <text class="value">{{ item.likeNum }}</text>
                <text class="label">点赞数</text>
              </text>
            </view>
            <view class="right">
              {{ item.createTime }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const typeList = [
  {
    text: "全部",
    value: 0,
  },
  {
    text: "头晕头痛",
    value: 1,
  },
  {
    text: "感冒咳嗽",
    value: 2,
  },
  {
    text: "腹泻呕吐",
    value: 3,
  },
  {
    text: "皮炎湿疹",
    value: 4,
  },
  {
    text: "妇科问题",
    value: 5,
  },
];

const scienceList = [
  {
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
  {
    id: 2,
    doctor: "胡晓丹",
    hospital: "曹县人民医院",
    job: "副主任医生",
    department: "妇科",
    title: "有疾病需要及时医治有疾病需要及时医治有疾病需要及时医治",
    type: 2, // 0：文章 1：视频
    tags: ["头晕头痛", "感冒咳嗽"],
    readNum: 2000,
    likeNum: 343,
    createTime: "2023-09-19 09:21:33",
    avatarUrl: "/static/images/avatar.png",
  },
];

export default {
  data() {
    return {
      currenntType: 0,
      typeList,
      scienceList,
    };
  },
  methods: {
    changeType(type) {
      this.currenntType = type;
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
.science {
  padding: $content-padding;
  .science-header {
    .type-list {
      display: flex;
      align-items: center;
      height: 100rpx;
      white-space: nowrap;
      .type-item {
        font-size: 14px;
        margin-right: 20rpx;
        padding: 10rpx 20rpx;
        border-radius: 10rpx;
        background-color: #fff;
        &.active {
          color: #fff;
          background-color: $color-primary;
        }
      }
    }
  }
  .science-content {
    .science-list {
      .science-item {
        margin-bottom: 20rpx;
        padding: 20rpx;
        .header {
          display: flex;
          image {
            margin-right: 15rpx;
            width: 100rpx;
            height: 100rpx;
          }
          .content {
            .name {
              font-size: 18px;
              font-weight: 600;
            }
            .desc {
              font-size: 14px;
            }
          }
        }
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
      }
    }
  }
}
</style>
