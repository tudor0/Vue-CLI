<template>
  <div>
    <div class="form">
      <form @submit.prevent="collectData">
        <div>
          <label for="Name">Name:</label>
          <input type="text" v-model="userName" />
        </div>
        <div>
          <label for="Age">Age:</label>
          <input
            type="number"
            min="1"
            max="99"
            step="1"
            class="age"
            v-model="userAge"
          />
        </div>
        <button>Update</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    collectData() {
      this.$emit("data-collection", this.userName, this.userAge);
    },
  },
};
</script>
