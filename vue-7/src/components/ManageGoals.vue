<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="saveGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Do not leave any empty fields</p>
        <button @click="closeDialog">Okay D:</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
      goal: "",
    };
  },
  methods: {
    saveGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
        setTimeout(() => {
          this.inputIsInvalid = false;
        }, 5000);
      }
    },
    closeDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
