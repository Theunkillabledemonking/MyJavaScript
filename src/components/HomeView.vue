<template>
  <div>
    <h1>홈 페이지</h1>
    <ButtonComponent label="클릭하세요" @clicked="handleClick" />
  </div>
</template>

<script>
  import ButtonComponent from "../components/ButtonComponent.vue";

  export default {
    components: { ButtonComponent },
    methods: {
      handleClick() {
        alert("홈 페이지 버튼 클릭!");
      }
    }
  };
</script>
