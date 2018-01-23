<template>
  <div class="show">
      {{allcount}}
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
