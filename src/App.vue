<template>
  <div>
    <Header />
    <nav>
      <router-link to="/">홈</router-link>
<!--      <router-link to="/login">로그인</router-link>-->
      <router-link to="/board">게시판</router-link>
      <router-link to="/inquiry">문의사항</router-link>
      <router-link to="/timetable">시간표</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
  import Header from "./components/Header.vue";
</script>
