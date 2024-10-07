<template>
  <div>
    <!-- <h1>Router view</h1> -->
    <!-- <router-link to="/">Click home</router-link>
    <router-link to="/about">Click about</router-link>
    <router-link to="/contact">Click contact</router-link> -->
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link> -->
    <!-- <nav>
      <router-link
        to="/"
        class="nav-button"
        :class="{ active: $route.path === '/' }"
        >Home</router-link
      >
      <router-link
        to="/product"
        class="nav-button"
        :class="{ active: $route.path === '/product' }"
        >Product</router-link
      >
      <router-link
        to="/detail"
        class="nav-button"
        :class="{ active: $route.path === '/detail' }"
        >Detail</router-link
      >
    </nav> -->
    <!-- <nav>
      <router-link
        to="/dashboard"
        class="nav-button"
        :class="{ active: $route.path === '/dashboard' }"
        >Dashboard</router-link
      >
      <router-link
        to="/product"
        class="nav-button"
        :class="{ active: $route.path === '/product' }"
        >Product</router-link
      >
      <router-link
        to="/account"
        class="nav-button"
        :class="{ active: $route.path === '/account' }"
        >Account</router-link
      >
    </nav> -->
    <router-view> </router-view>
    <!-- <button @click="redirectPage">redirect</button> -->
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
// const redirectPage = () => {
//   router.push("/contact");
// };
</script>
<style scoped>
.nav-button {
  padding: 10px 20px;
  margin: 5px;
  background-color: lightgray;
  text-decoration: none;
  color: black;
  border-radius: 5px;
}
.nav-button.active {
  background-color: blue;
  color: white;
}
</style>
