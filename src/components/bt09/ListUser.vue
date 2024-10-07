<template>
  <div>
    <p>------------------------------------</p>
    <div v-for="(item, index) in users" :key="index">
      <p>id: {{ item.id }}</p>
      <p>User Name: {{ item.name }}</p>
      <p>Email: {{ item.email }}</p>
      <p>Address: {{ item.address }}</p>
      <button @click="handleInfor(item.id)">Xem chi tiết</button>
      <p>---------------------------------</p>
    </div>

    <h1>Thông tin chi tiết</h1>
    <UserDetail :user="selectedUser" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserDetail from "./UserDetail.vue";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Nghệ An" },
  {
    id: 3,
    name: "Nguyễn Văn C",
    email: "nvc@gmail.com",
    address: "Hồ Chí Minh",
  },
];

const selectedUser = ref(null); // Lưu user được chọn

const handleInfor = (id) => {
  selectedUser.value = users.find((user) => user.id === id); // Lấy thông tin người dùng dựa vào id
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin: 5px;
  background-color: lightgray;
  text-decoration: none;
  color: black;
  border-radius: 5px;
}
</style>
