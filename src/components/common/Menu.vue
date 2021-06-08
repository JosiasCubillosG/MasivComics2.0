<template>
  <div class="app-menu columns is-mobile m-0">
    <router-link
      class="
        menu-home
        column
        is-6
        p-1
        is-flex is-flex is-justify-content-center is-align-items-center
      "
      to="/"
      >Home</router-link
    >
    <router-link
      class="
        menu-comics
        column
        is-6
        p-1
        is-flex is-flex is-justify-content-center is-align-items-center
      "
      to="/list-comics"
      >List</router-link
    >
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>
