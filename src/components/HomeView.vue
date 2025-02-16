<template>
  <div>
    <Header />
    <h1>홈 페이지</h1>

    <section>
      <h2>공지사항</h2>
      <ul>
        <li v-for="(notice, index) in notices" :key="index">{{ notice }}</li>
      </ul>
    </section>

    <section>
      <h2>시간표</h2>
      <ul>
        <li v-for="(schedule, index) in schedules" :key="index">{{ schedule }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Header from "../components/Header.vue";
  import { ref } from "vue";

  export default {
    components: { Header },
    setup() {
      const notices = ref(["학사 일정 공지", "수업 변경 안내", "시험 일정 발표"]);
      const schedules = ref(["월요일: 수학", "화요일: 일본어", "수요일: 프로그래밍"]);

      return { notices, schedules };
    }
  };
</script>
