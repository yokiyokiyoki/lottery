<template>
  <div id="app">
    <!-- <img src="@/assets/bg.jpg"> -->
      <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}
</style>
