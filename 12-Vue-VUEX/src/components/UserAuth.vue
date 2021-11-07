<template>
  <div>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.getAuth;
    },
  },
};
</script>
