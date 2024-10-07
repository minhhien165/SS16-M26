<!-- EmployeeProjects.vue -->
<template>
  <div>
    <h3>Dự án</h3>
    <p>Danh sách dự án của nhân viên ID: {{ route.params.id }}</p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
