<!-- EmployeeContact.vue -->
<template>
  <div>
    <h3>Liên hệ</h3>
    <p>Thông tin liên hệ của nhân viên ID: {{ route.params.id }}</p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
