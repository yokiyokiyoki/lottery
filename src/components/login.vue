<template>
  <div class="login">
    <!-- <img src="@/assets/bg.jpg"> -->
    <div class="center">
        <el-input v-model="count" placeholder="请输入总人数" class="input"/>
        <el-button type="primary" plain @click.enter='handler'>确定抽奖总人数</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handler() {
      if (this.count > 0 && this.count <= 137) {
        // 此处应传进去总数
        this.$router.push({ name: "Main", params: { count: this.count } });
      } else {
        this.$message.error("请输入有效的抽奖人数");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .input {
      width: 100px;
    }
  }
}
</style>
