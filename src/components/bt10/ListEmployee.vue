<!-- ListEmployee.vue -->
<template>
  <div>
    <h1>Danh sách nhân viên</h1>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        <router-link :to="`/employees/${employee.id}`"
          >{{ employee.name }} - {{ employee.position }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const employees = ref([
  { id: 1, name: "Nguyễn Văn A", position: "Kỹ sư" },
  { id: 2, name: "Trần Thị B", position: "Quản lý" },
  { id: 3, name: "Lê Văn C", position: "Nhân viên" },
]);
</script>
