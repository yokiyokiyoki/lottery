<template>
  <div class="main">
    <div class="content" :style="{backgroundImage: 'url(' +bgImg + ')'}">
      <img src="~@/assets/logo.png" class="logo">
      <div class="box">
        <div class="box-header">
          <h1 v-show='lotteryArr.length!=0'>{{rankName}}中奖名单</h1>
        </div>
        <div class="box-content">
          <div class="lotteryShow" :class="showNumCls" v-if='!lotteryState'>
            <span v-for='n in lotteryArr' :key='n' class="showNum" >
              <em>{{n}}</em>
            </span>
          </div>
          <div class="lotteryShow-ramdom" v-else>
            <animated-integer :value='animatedNum'></animated-integer>
          </div>
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
  created() {
    this.count = this.$route.params.count;
    this.initCount();
  },
  data() {
    return {
      bgImg: require("../assets/bg.jpg"),
      rankName: "三等奖",
      selected: 3,
      count: 1, //抽奖总人数
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
      lotteryState: false,
      randomIntervalId: null,
      animatedNum: 1,
      showNumCls: "lotteryShow-40",
      //抽奖的数组
      lotteryArr: [],
      //总人数数组
      countArr: [],
      //抽取次数，每个只能抽一次，防止多抽
      times: [1, 1, 1, 1],
      //所有抽奖抽到的
      allLocCount: []
    };
  },
  methods: {
    initCount() {
      for (let i = 1; i <= this.count; i++) {
        this.countArr.push(i);
      }
    },
    handleLottery() {
      let selected = this.selectedList.filter(item => {
        return item.value == this.selected;
      })[0];
      if (this.times[selected.value] <= 0) {
        this.$message.error(`只能抽取一次${selected.label}`);
        return;
      }
      this.rankName = selected.label;
      this.randomIntervalId = setInterval(() => {
        this.animatedNum = randomNum(1, this.countArr.length);
      }, 500);
      this.lotteryState = !this.lotteryState;
    },
    handlePause() {
      let selected = this.selectedList.filter(item => {
        return item.value == this.selected;
      })[0];
      this.times[selected.value]--;
      let num = selected.count;
      this.showNumCls = changeCls(num);
      let temp = lottery(num, this.countArr);
      this.countArr = temp.countArr;
      this.lotteryArr = temp.lotteryArr;
      this.allLocCount.push(this.lotteryArr);
      console.log(this.countArr, this.lotteryArr, this.times, this.allLocCount);
      //所有获奖存在本地
      localStorage.setItem("allLocCount", JSON.stringify(this.allLocCount));
      //未获奖的存在本地
      localStorage.setItem("noLocCount", JSON.stringify(this.countArr));
      clearInterval(this.randomIntervalId);
      this.randomIntervalId = null;
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

// num:所要抽取的随机数，
// count:总人数数组
// 每抽完一次要把抽过的去掉
function lottery(num, count) {
  let len = count.length,
    isChooed = []; // 已选中的数组下标函数
  do {
    let rand = parseInt(Math.random() * len);
    if (isChooed.indexOf(rand) < 0) {
      isChooed.push(rand);
    }
  } while (isChooed.length != num);

  let loc = [],
    notC = [];
  count.forEach((item, index) => {
    if (isChooed.indexOf(index) >= 0) {
      loc.push(item);
    } else {
      notC.push(item);
    }
  });
  return {
    lotteryArr: loc, //当前抽取的
    countArr: notC //剩下的总数
  };
}
function changeCls(num) {
  if (num == 40) {
    return "lotteryShow-40";
  } else if (num == 10) {
    return "lotteryShow-10";
  } else if (num == 3) {
    return "lotteryShow-3";
  } else {
    return "lotteryShow-1";
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
    // background: url("~@/assets/bg.jpg");
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
        position: absolute;
        top: 100px;
        right: 0px;
        left: 0px;
        bottom: 150px;
        .lotteryShow {
          height: 100%;
          width: 100%;
          display: grid;
          &-ramdom {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .showNum {
            // border: 1px solid white;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          &-40 {
            grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
            grid-template-rows: 25% 25% 25% 25%;
            em {
              font-size: 30px;
              font-style: normal;
              display: inline-block;
              height: 80px;
              width: 80px;
              border-radius: 50%;
              border: 1px solid white;
              line-height: 80px;
            }
          }
          &-10 {
            grid-template-columns: 20% 20% 20% 20% 20%;
            grid-template-rows: 50% 50%;
            em {
              font-size: 40px;
              font-style: normal;
              display: inline-block;
              height: 160px;
              width: 160px;
              border-radius: 50%;
              border: 5px solid white;
              line-height: 160px;
            }
          }
          &-3 {
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: 100%;
            em {
              font-size: 50px;
              font-style: normal;
              display: inline-block;
              height: 260px;
              width: 260px;
              border-radius: 50%;
              border: 5px solid white;
              line-height: 260px;
            }
          }
          &-1 {
            grid-template-columns: 100%;
            grid-template-rows: 100%;
            em {
              font-size: 80px;
              font-style: normal;
              display: inline-block;
              height: 360px;
              width: 360px;
              border-radius: 50%;
              border: 10px solid white;
              line-height: 360px;
            }
          }
        }
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
