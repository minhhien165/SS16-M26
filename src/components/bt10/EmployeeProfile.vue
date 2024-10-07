<!-- EmployeeProfile.vue -->
<template>
  <div>
    <h3>Thông tin cá nhân</h3>
    <p>Đây là thông tin cá nhân của nhân viên ID: {{ route.params.id }}</p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
