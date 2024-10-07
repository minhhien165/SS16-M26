<template>
  <div>
    <h1>UserDetail</h1>
    <p>User name: {{ findUser().name }}</p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

// Danh sách data của user

const router = useRoute();
// detructering
const { id } = router.params;

const findUser = () => {
  return users.find((item) => item.id == id);
};
let users = [
  {
    id: 1,
    name: "Minh thu",
  },
  {
    id: 2,
    name: "Vân",
  },
  {
    id: 3,
    name: "Trung",
  },
];
</script>
<style></style>
