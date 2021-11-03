<template>
  <div>
    <the-header></the-header>
    <button @click="setActiveComponent('active-goals')">Active Goals</button>
    <button @click="setActiveComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Tuglea Tudor",
        description: "Local depressed and junkie",
        role: "author",
      },
    };
  },
  methods: {
    setActiveComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #d3d3d3;
  font-family: "Metrophobic", sans-serif;
}
</style>
