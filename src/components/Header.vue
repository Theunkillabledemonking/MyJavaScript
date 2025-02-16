<template>
  <header>
    <h1>내 웹사이트</h1>
    <p v-if="userStore.username">환영합니다, {{ userStore.username }}!</p>
  </header>
</template>

<script>
  import { useUserStore } from "../store/user";
  export default {
    setup() {
      const userStore = useUserStore();
      return { userStore };
    }
  }
</script>
