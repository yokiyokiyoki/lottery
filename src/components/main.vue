<template>
  <div class="main">
    
  </div>
</template>

<script>
import animatedInteger from "./animated-integer.vue";
export default {
  components: {
    animatedInteger
  },
  mounted() {}
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
  .header {
    margin: 50px 0px;
  }
}
</style>
