<template>
  <div class="register-container">
    <h2>Login account</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Your email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="name@company.com"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit" class="btn-submit">Login an account</button>
    </form>
    <p>Already have an account? <a href="#">Register here</a></p>
  </div>
</template>

<script></script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-submit:hover {
  background-color: #0056b3;
}
</style>
