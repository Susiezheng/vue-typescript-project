<template>
  <div id="app" class="wrapper">
    <router-view />
  </div>
</template>

<style lang="less">
  #app {
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
