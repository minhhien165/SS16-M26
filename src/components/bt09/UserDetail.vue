<template>
  <div v-if="user">
    <h2>Chi tiết người dùng</h2>
    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object, 
});
</script>
