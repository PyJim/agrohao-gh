<template>
  <div class="app">
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Raleway:wght@400;500&display=swap");
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: 400;
  font-family: apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;;
}
.app {
  min-height: 100vh;
  width: 100vw;
  min-width: 100%;
  position: absolute;
  background-color: #fff;
}
.container{
  padding: 0 20px;
  margin: 0 auto;
}

</style>
