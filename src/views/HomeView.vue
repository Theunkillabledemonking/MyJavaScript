<template>
  <div>
    <Header />
    <h1>포텔 메인 페이지</h1>
    <nav>
      <router-link to="/board">게시판</router-link> |
      <router-link to="/timetable">시간표</router-link> |
      <router-link to="/inquiry">문의사항</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "HomeView"
  };
</script>
