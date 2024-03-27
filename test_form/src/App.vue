<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/second">Страница 2</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>