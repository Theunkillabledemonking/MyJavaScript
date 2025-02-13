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
    <h1>자식 구조</h1>
    <TodoItem v-for="item in todos" :key="item.id" :todo="item" />
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ChildComponent from "./components/ChildComponent.vue";
import TodoItem from "./components/TodoItem.vue"

export default {
  name: "App",
  components: {
    ButtonComponent,
    ChildComponent,
    TodoItem,
  },
  data() {
    return {
      todos: [
        {id: 1, text: "vue 공부하기"},
        {id: 2, text: "컴포넌트 학습하기"},
      ],
    };
  },
  methods: {
    handleButtonClick() {
      alert('버튼이 클릭되었습니다!');
    },
  },
};
</script>
