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
      a: `<div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <h2 style="color:#252A33;font-size:20px;font-weight:500;"> 一、体温几度算「发烧」？ </h2> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 发烧，医学界常称为「发热」，是指体温升高，超过正常体温 0.5 ℃。每个人的体温略有差异，同一个人在不同时段的体温也不尽相同，所以判定是否发热应与自己平时相同条件下的体温做比较。 </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 临床工作中我们常常把腋窝温度大于 37.2 ℃ 视为发热。 </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <h2 style="color:#252A33;font-size:20px;font-weight:500;"> 二、发烧时怎么做才是对的？ </h2> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 如果发热在机体尚能忍受的极限内，譬如发热时体温不是过高，体温在 39°C 以下，而发热时间持续又不是过长，那么可能经过一般的处理就有可能退烧了； </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 如果发热严重干扰了你的生活和工作，或持续时间过长，那就必须要采取积极措施了。 </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> <span style="font-weight:700;">1. 多喝水</span> </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 别人在你发烧的时候让你多喝水真的不是敷衍你，发热时代谢速度增快，体内水分消耗快，需要及时补充。 </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> <span style="font-weight:700;">2. 退烧药</span> </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 上面两条都是辅助措施，这一个才是对症处理。目前成人退烧首选对乙酰氨基酚类药物，市面上许多感冒药都含有此成分。无需每天定时吃，也不能超量吃，只在不舒服的时候短期服用就行了。 </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> <span style="font-weight:700;">3. 及时就医</span> </p> </div> <div class="html-parse continuous-img-no-margin content-html" style="margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;"> <p> 由于可以引起发热的病因繁杂众多。上面介绍的是针对常见的发热患者的常规处理原则。而对于那些经过常规处理热度依然经久不退、或者高热患者（体温达 39.5°C～41°C）、伴有惊厥、恶心、呕吐等症状者应予及时送医，查明病因，及时给予对症和对因治疗。 </p> </div>`,
      nodes:
        '<div class=\\"html-parse continuous-img-no-margin content-html\\" style=\\"margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;\\">\n\t<h2 style=\\"color:#252A33;font-size:20px;font-weight:500;\\">\n\t\t一、体温几度算「发烧」？\n\t</h2>\n</div>\n<div class=\\"html-parse continuous-img-no-margin content-html\\" style=\\"margin:0px;padding:0px;color:#444C57;font-size:16px;font-family:&quot;background-color:#FFFFFF;\\">\n\t<p>\n\t\t发烧，医学界常称为「发热」，是指体温升高，超过正常体温 0.5 ℃。每个人的体温略有差异，同一个人在不同时段的体温也不尽相同，所以判定是否发热应与自己平时相同条件下的体温做比较。\n\t</p>\n</div>',
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
