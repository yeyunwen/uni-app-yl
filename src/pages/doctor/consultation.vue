<template>
  <view class="consultation">
    <uni-notice-bar
      text="根据互联网诊疗活动等相关规定，我院医生为复诊者开具线上处方，若非复诊，我们仅提供医疗咨询服务。"
    />
    <view class="consultation-content">
      <view class="consultation-user tile">
        <uni-title type="h1" title="您要为谁咨询"></uni-title>
        <view class="user-list">
          <uni-tag :circle="true" text="本人 男" type="primary" />
          <uni-tag :circle="true" text="张三 女" type="primary" inverted />
        </view>
      </view>
      <view class="consultation-user tile">
        <uni-title type="h1" title="请描述你的病情"></uni-title>
        <uni-easyinput
          type="textarea"
          placeholder="请输入内容"
          :inputBorder="false"
        ></uni-easyinput>
      </view>
    </view>
    <div class="buttom">
      <button>咨询</button>
    </div>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}
</style>
<style lang="scss" scoped>
.tile {
  margin-bottom: 30rpx;
}
.consultation-content {
  padding: $content-padding;
  .consultation-user {
    padding: 10rpx;
    // uni-title {
    //   overflow: hidden;
    //   margin-bottom: 20rpx;
    // }
    .user-list {
      margin-bottom: 20rpx;
      > uni-tag {
        margin-right: 20rpx;
      }
    }
  }
}
.buttom {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 20rpx 0 40rpx;
  button {
    width: 650rpx;
    color: #fff;
    background-color: $color-primary;
  }
}
</style>
