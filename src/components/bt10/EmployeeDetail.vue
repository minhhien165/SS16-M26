<!-- EmployeeDetail.vue -->
<template>
  <div>
    <h2>Chi tiết nhân viên ID: {{ route.params.id }}</h2>
    <ul>
      <li>
        <router-link :to="`/employees/${route.params.id}/profile`"
          >Thông tin cá nhân</router-link
        >
      </li>
      <li>
        <router-link :to="`/employees/${route.params.id}/projects`"
          >Dự án</router-link
        >
      </li>
      <li>
        <router-link :to="`/employees/${route.params.id}/contact`"
          >Liên hệ</router-link
        >
      </li>
    </ul>

    <!-- Hiển thị nested routes -->
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
