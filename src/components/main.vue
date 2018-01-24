<template>
  <div class="main">
    <div class="content">
      <img src="~@/assets/logo.png" class="logo">
      <div class="box">
        <div class="box-header">
          <h1>{{rankName}}等奖中奖名单</h1>
        </div>
        <div class="box-content">
          1
        </div>
        <div class="box-footer">
          <el-select v-model="selected" placeholder="请选择">
            <el-option
              v-for="item in selectedList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div class="button">
            <el-button type="primary">抽奖</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animatedInteger from "./animated-integer.vue";
export default {
  components: {
    animatedInteger
  },
  mounted() {},
  data() {
    return {
      rankName: "三",
      selected: 3,
      selectedList: [
        {
          label: "三等奖",
          value: 3
        },
        {
          label: "二等奖",
          value: 2
        },
        {
          label: "一等奖",
          value: 1
        },
        {
          label: "特等奖",
          value: 0
        }
      ]
    };
  }
};
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    background: url("~@/assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 500px;
      position: absolute;
      top: -80px;
    }
    .box {
      color: white;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      &-header {
        // color: #4cb2a6;
        color: #3a8ee6;
      }
      &-content {
      }
      &-footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 50px;
        display: flex;
        justify-content: center;
        .button {
          display: inline-block;
          margin-left: 20px;
          .el-button--primary {
            width: 100px;
          }
        }
      }
    }
  }
}
</style>
