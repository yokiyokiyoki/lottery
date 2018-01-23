<template>
  <div class="show">
      <h1>获奖一览</h1>
      <div v-for='(value,key,index) in allCount' :key='index'>
          <h2>{{transform(key)}}等奖</h2>
          <div class="box">
            <span v-for='i in value' :key='i'>{{i}}</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCount: {}
    };
  },
  methods: {
    transform(val) {
      if (val == 0) {
        return "特";
      } else if (val == 1) {
        return "一";
      } else if (val == 2) {
        return "二";
      } else if (val == 3) {
        return "三";
      } else {
        return "四";
      }
    }
  },
  mounted() {
    this.allCount = JSON.parse(localStorage.getItem("allLocCount"));
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
