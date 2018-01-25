/*
 * @Author: Yoki 
 * @Date: 2018-01-25 11:45:25 
 * @Last Modified by: Yoki
 * @Last Modified time: 2018-01-25 11:46:00
 */
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
            <el-button type="primary" v-if='!lotteryState' @click='handleLottery'>抽奖</el-button>
            <el-button type="primary" v-else @click='handlePause'>停止</el-button>
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
          value: 3,
          //所抽总数
          count: 40
        },
        {
          label: "二等奖",
          value: 2,
          count: 10
        },
        {
          label: "一等奖",
          value: 1,
          count: 3
        },
        {
          label: "特等奖",
          value: 0,
          count: 1
        }
      ],
      //是否正在抽奖
      lotteryState: false
    };
  },
  methods: {
    handleLottery() {
      this.lotteryState = !this.lotteryState;
    },
    handlePause() {
      this.lotteryState = !this.lotteryState;
    }
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

// num:所要抽取的随机数
function lottery(num) {
  do {
    let rand = parseInt(Math.random() * len);
    if (isChooed.indexOf(rand) < 0) {
      isChooed.push(rand);
    }
  } while (isChooed.length != num);

  let loc = [],
    notC = [];
  this.count.forEach((item, index) => {
    if (isChooed.indexOf(index) >= 0) {
      loc.push(item);
    } else {
      notC.push(item);
    }
  });
  this.locCount = loc;
  this.count = notC;
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
