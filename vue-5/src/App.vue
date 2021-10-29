<template>
  <div>
    <user-data @data-collection="updateData"></user-data>
    <active-user :name="user.name" :age="user.age"> </active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Tudor",
        age: 20,
      },
    };
  },
  methods: {
    updateData(name, age) {
      this.user = {
        name,
        age,
      };
    },
  },
};
</script>

<style lang="css">
#app .form {
  margin: auto;
  background-color: #d3d3d3;
  width: 400px;
  text-align: center;
  border-radius: 10px;
}
#app .form input {
  margin: 10px;
  border: none;
  outline: none;
}
#app form button {
  background-color: transparent;
  outline: none;
  border: 2px solid #000;
  margin: 5px;
  padding: 5px 7px;
  font-size: 1.1rem;
  font-family: inherit;
  cursor: pointer;
}
</style>
