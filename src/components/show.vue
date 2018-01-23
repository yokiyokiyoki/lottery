<template>
  <div class="show">
      {{allCount}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCount: {}
    };
  },
  mounted() {
    this.allCount = JSON.parse(localStorage.getItem("allLocCount"));
  }
};
</script>
