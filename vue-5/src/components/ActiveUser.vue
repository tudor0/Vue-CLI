<template>
  <div class="activeUser">
    <h1>Your name is: {{ name }}</h1>
    <h3>You are {{ age }} years old</h3>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="css">
.activeUser {
  margin: 100px;
  border: 1px solid black;
  width: 500px;
  margin: auto;
  margin-top: 100px;
  border-radius: 15px;
  text-align: center;
}
.activeUser h3 {
  margin: 50px;
}
</style>
