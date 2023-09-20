<template>
  <view class="add">
    <view class="add-form">
      <uni-forms :modelValue="formData" :rules="rules" ref="form">
        <view class="info tile">
          <uni-forms-item required label="姓名">
            <uni-easyinput
              v-model="formData.name"
              :inputBorder="false"
              type="text"
              placeholder="请输入真实姓名"
            />
          </uni-forms-item>
          <uni-forms-item required label="身份证号">
            <uni-easyinput
              v-model="formData.id"
              :inputBorder="false"
              type="text"
              placeholder="请输入身份证号"
            />
          </uni-forms-item>
          <uni-forms-item required label="出生日期">
            <uni-datetime-picker
              v-model="formData.birthday"
              type="date"
              :border="false"
            />
          </uni-forms-item>
          <view class="gender">
            <uni-forms-item required label="性别">
              <uni-data-checkbox
                v-model="formData.gender"
                :localdata="sex"
                mode="tag"
              ></uni-data-checkbox>
            </uni-forms-item>
          </view>
          <uni-forms-item required label="电话">
            <uni-easyinput
              v-model="formData.phone"
              :inputBorder="false"
              type="text"
              placeholder="请输入电话"
            />
          </uni-forms-item>
        </view>
        <view class="relation tile">
          <uni-forms-item required label="与您的关系">
            <uni-data-checkbox
              v-model="formData.relation"
              :localdata="relationList"
              mode="tag"
            ></uni-data-checkbox>
          </uni-forms-item>
        </view>
      </uni-forms>
    </view>

    <view class="handle">
      <view class="checkbox">
        <uni-icons
          @tap="setDefault"
          type="checkbox"
          :color="getCheckColor"
          size="18"
        />
        设为默认就诊人
      </view>
      <view class="btns-list tile">
        <button class="delete btns" @click="deleteHandle">删除</button>
        <button class="save btns" @click="saveHandle">保存</button>
      </view>
    </view>
  </view>
</template>

<script>
const sex = [
  {
    text: "男",
    value: 0,
  },
  {
    text: "女",
    value: 1,
  },
];

const relationList = [
  {
    text: "本人",
    value: 0,
  },
  {
    text: "父母",
    value: 1,
  },
  {
    text: "配偶",
    value: 2,
  },
  {
    text: "子女",
    value: 3,
  },
  {
    text: "其他",
    value: 4,
  },
];

export default {
  onLoad(options) {
    const { id } = options;
  },
  data() {
    return {
      rules: {},
      formData: {
        name: "",
        id: "",
        birthday: "",
        gender: 0,
        phone: "",
        relation: 0,
      },
      sex,
      relationList,
      defaultUser: false,
    };
  },
  computed: {
    getCheckColor() {
      return this.defaultUser ? "blue" : "";
    },
  },
  methods: {
    setDefault() {
      console.log("tap");
      this.defaultUser = !this.defaultUser;
    },
    deleteHandle() {},
    saveHandle() {},
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color-grey;
}

.uni-forms-item {
  margin-bottom: 0 !important;
  padding: 0 15rpx;
  border-bottom: 2rpx solid #eee;
}
.uni-forms-item__label {
  width: initial !important;
}
.uni-easyinput__placeholder-class {
  text-align: end;
}

.gender {
  .uni-data-checklist .checklist-group .checklist-box.is--tag {
    background-color: #fff;
  }
}

.relation {
  .uni-forms-item {
    flex-direction: column !important;
  }
  .uni-data-checklist .checklist-group .checklist-box.is--tag {
    border-radius: 25rpx;
    background-color: #fff;
  }
}
</style>

<style lang="scss" scoped>
.add {
  padding: $content-padding;
  .add-form {
    .info {
      margin-bottom: 20rpx;
    }
  }
  .handle {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateX(-20rpx);

    .checkbox {
      margin-bottom: 30rpx;
      font-size: 12px;
      text-align: center;
    }
    .btns-list {
      display: flex;
      padding: 30rpx 0 50rpx;
      .btns {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200rpx;
        height: 80rpx;
      }
      .delete {
        color: blue;
        background-color: #fff;
        border: 2rpx solid blue;
      }
      .save {
        width: 450rpx;
        color: #fff;
        background-color: blue;
      }
    }
  }
}
</style>
