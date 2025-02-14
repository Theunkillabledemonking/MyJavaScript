<template>
  <div>
    <h1>Vue 테스트 페이지</h1>
    <nav>
      <router-link to="/">One Way</router-link> |
      <router-link to="/towway">Two Way</router-link> |
      <router-link to="/vmodel">v model</router-link>
    </nav>
    <router-view />
  </div>

  <div>
    <h1>Vue 컴포넌트 예제</h1>
    <button-component label="클릭하세요" @clicked="handleButtonClick" />
  </div>

  <div>
    <h1>Vue Props 예제</h1>
    <ChildComponent title="안녕하세요!" content="Vue의 props를 배웁니다." />
  </div>

  <div>
    <h1>부모 -> 자식</h1>
    <TodoItem v-for="item in todos" :key="item.id" :todo="item" />
  </div>

  <div>
    <h1>자식 -> 부모</h1>
    <ChildComponentP @custom-event="handleEvent" />
  </div>

  <div>
    <h1>Vue Router 예제</h1>
    <nav>
      <router-link to="/home">홈</router-link> |
      <router-link to="/completed">완료된 목록</router-link> |
      <router-link to="/notcompleted">미완료 목록</router-link>
    </nav>
    <router-view /> <!-- 현재 url에 맞는 컴포넌트가 표시 -->
  </div>

  <div>
    <h2>파라미터 동적 페이지(할 일 목록)</h2>
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/todo/1">할 일 1 </router-link> |
      <router-link to="/todo/2">할 일 2</router-link>
    </nav>
    <router-view /> <!-- 현재 url에 맞는 컴포넌트 표시 -->
  </div>

  <div>
    <p>현재 카운트: {{ store.count }}</p>
    <p>2배 카운트: {{ store.doubleCount }}</p>
    <button @click="store.increment">증가</button>
    <button @click="store.incrementAsync">1초 후 증가</button>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ChildComponent from "./components/ChildComponent.vue";
import TodoItem from "./components/TodoItem.vue"
import ChildComponentP from "./components/ChildComponentP.vue";

import { useCounterStore } from "@/store/counter";

export default {
  name: "App",
  components: {
    ButtonComponent,
    ChildComponent,
    TodoItem,
    ChildComponentP
  },
  setup() {
    const store = useCounterStore(); // Pinia 스토어 가져오기
    return { store };
  },
  methods: {
    handleButtonClick() {
      alert('버튼이 클릭이 되었습니다.');
    },
    handleEvent(data) {
      alert(data);
    },
  }
};
</script>
