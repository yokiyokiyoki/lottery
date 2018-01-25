<template>
  <div class="show">
      <h1>获奖一览</h1>
      <div v-for='(value,index) in allCount' :key='index'>
          <h2>{{transform(value.length)}}等奖</h2>
          <div class="box">
            <span v-for='i in value' :key='i'>{{i}}</span>
          </div>
      </div>
      <h1>未获奖</h1>
      <div class="box">
        <span v-for='i in noCount' :key='i'>{{i}}</span>  
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCount: [],
      noCount: []
    };
  },
  methods: {
    transform(val) {
      if (val == 1) {
        return "特";
      } else if (val == 3) {
        return "一";
      } else if (val == 10) {
        return "二";
      } else {
        return "三";
      }
    }
  },
  mounted() {
    this.allCount = JSON.parse(localStorage.getItem("allLocCount"));
    this.noCount = JSON.parse(localStorage.getItem("noLocCount"));
    console.log(this.allCount, this.noCount);
  }
};
</script>
<style lang="less" scoped>
.show {
  height: 800px;
  .box {
    width: 400px;
    span {
      height: 40px;
      width: 40px;
      display: inline-block;
    }
  }
}
</style>
