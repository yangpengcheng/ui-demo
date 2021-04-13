<template>
  <div style="margin-bottom: 10px;  text-align: center;">
    <router-link to="/alert">Alert</router-link> |
    <router-link to="/badge">Badge</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/card">Card</router-link> |
    <router-link to="/checkbox">Checkbox</router-link> |
    <router-link to="/input">Input</router-link> |
    <router-link to="/link">Link</router-link> |
    <router-link to="/menu">Menu</router-link> |
    <router-link to="/radio">Radio</router-link> |
    <router-link to="/slider">Slider</router-link> |
    <router-link to="/switch">Switch</router-link> |
    <router-link to="/tag">Tag</router-link> |
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
}
a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>