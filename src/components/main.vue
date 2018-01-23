<template>
  <div class="main">
    <div class="header">
      <!-- Datastory -->
      <img src="@/assets/logo-Horizontal.png" alt="">
    </div>
    <div class="content" v-show='status'>
      <span :class="numClass" v-for='(n, index) in locCount' :key='index'>{{n}}</span>
    </div>
    <div class="content center" v-show='!status'>
      <animated-integer :value="animateNum"></animated-integer>
      <!-- <span>正在抽奖</span>   -->
    </div>
    
    <div class="footer">
      <el-select v-model="value" placeholder="请选择" >
        <el-option
          v-for="item in list"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="maxNum" label="抽奖人数"></el-input-number> -->
        <el-button type="primary" plain @click='handleStart' v-if='status'>开始抽奖</el-button>
        <el-button type="primary" plain @click='handlePause' v-else>暂停抽奖...</el-button>
    </div>
  </div>
</template>

<script>
import animatedInteger from "./animated-integer.vue";
export default {
  components: {
    animatedInteger
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      status: true, // 抽中的人
      list: [
        {
          value: "0",
          label: "特等奖"
        },
        {
          value: "1",
          label: "一等奖"
        },
        {
          value: "2",
          label: "二等奖"
        },
        {
          value: "3",
          label: "三等奖"
        },
        {
          value: "4",
          label: "四等奖"
        }
      ],
      value: "4",
      count: [], // 未抽中的人 此处应初始化一个数组
      locCount: [], // 当前选中的人
      num: 30,
      maxNum: 100,
      numClass: "num-30",
      ramdom: 30,
      allLocCount: {
        "0": [],
        "1": [],
        "2": [],
        "3": [],
        "4": []
      },
      //每个的次数
      times: {
        0: 1,
        1: 1,
        2: 2,
        3: 2,
        4: 3
      },
      animateNum: 1,
      intervalId: null
    };
  },
  methods: {
    init() {
      let count = this.$route.params.count,
        arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(i + 1);
      }
      this.count = arr;
      this.locCount = [];
    },
    handleChange(value) {
      this.num = value;
    },
    handleStart() {
      if (this.times[this.value] == 0) {
        this.$message.error("不能再抽这个了~");
        return;
      }
      this.times[this.value]--;
      this.status = !this.status;
      this.intervalId = setInterval(() => {
        this.animateNum = randomNum(1, this.$route.params.count);
      }, 500);
    },
    handlePause() {
      this.intervalId = null;
      this.status = !this.status;
      initCls.call(this, this.value);
      this.lottery(this.count, this.num);
      this.allLocCount[this.value].push(...this.locCount);
      localStorage.setItem("allLocCount", JSON.stringify(this.allLocCount));
    },
    /**
     * 抽奖函数 已抽中的人出栈 放到
     * @old 抽奖的数组基数
     * @num 当前需要抽到奖的人数
     * old, num
     */
    lottery() {
      let len = this.count.length,
        isChooed = []; // 已选中的数组下标函数
      if (len == 0) {
        this.$message.error("抽奖人数已达上限");
        return;
      }
      // 当前随机选中的数量比 未选中的还少 则全选中返回
      if (len <= this.num) {
        this.locCount = this.count;
        this.count = [];
      } else {
        do {
          let rand = parseInt(Math.random() * len);
          if (isChooed.indexOf(rand) < 0) {
            isChooed.push(rand);
          }
        } while (isChooed.length != this.num);

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
    }
  },
  watch: {
    value(val, oldVal) {
      // 切换三等奖到二等奖的时候 重新初始化
      if (val == 2 && oldVal == 3) {
        this.init();
      }
      if (val == 0) {
        this.num = 1;
        this.maxNum = 1;
        this.ramdom = 1;
      } else if (val == 1) {
        this.num = 3;
        this.maxNum = 10;
        this.ramdom = 3;
      } else if (val == 2) {
        this.num = 5;
        this.maxNum = 30;
        this.ramdom = 5;
      } else if (val == 3) {
        this.num = 20;
        this.maxNum = 60;
        this.ramdom = 20;
      } else {
        this.num = 30;
        this.maxNum = 100;
        this.ramdom = 30;
      }
    }
  }
};
function initCls(val) {
  if (val == 0) {
    this.numClass = "num-1";
  } else if (val == 1) {
    this.numClass = "num-3";
  } else if (val == 2) {
    this.numClass = "num-5";
  } else if (val == 3) {
    this.numClass = "num-20";
  } else {
    this.numClass = "num-30";
  }
}
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
  background-image: url(../assets/pic.jpg);
  background-repeat: no-repeat;
  .header {
    margin: 50px 0px;
  }
  .content {
    height: 600px;
    width: 1200px;
    // border: 10px solid #409eff;
    margin: 50px 0px;
    &.center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .num {
      &-30 {
        height: 180px;
        width: 120px;
        display: inline-block;
        line-height: 180px;
        font-size: 30px;
      }
      &-20 {
        height: 300px;
        width: 120px;
        display: inline-block;
        line-height: 300px;
        font-size: 30px;
      }
      &-5 {
        height: 600px;
        width: 200px;
        display: inline-block;
        line-height: 600px;
        font-size: 40px;
      }
      &-3 {
        height: 600px;
        width: 400px;
        display: inline-block;
        line-height: 600px;
        font-size: 40px;
      }
      &-1 {
        height: 600px;
        width: 400px;
        display: inline-block;
        line-height: 600px;
        font-size: 80px;
      }
    }
  }
  .footer {
    margin: 50px 0px;
  }
}
</style>
