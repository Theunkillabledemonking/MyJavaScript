<template>
  <div>
    <h2>로그인</h2>
    <input v-model="username" placeholder="이름을 입력하세요" />
    <button @click="login">로그인</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "../store/user.js";
import { useRouter } from "vue-router";

const username = ref("");
const userStore = useUserStore();
const router = useRouter();

const login = () => {
  if (username.value) {
    userStore.login(username.value);
    router.push("/"); // 로그인 후 홈으로 이동
  }
};

// localStorage 변경 감지
watch(() => localStorage.getItem("isLoggedIn"), (newVal) => {
  userStore.isLoggedIn = newVal === true;
});
</script>