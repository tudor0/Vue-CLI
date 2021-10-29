<template>
  <div>
    <form @submit.prevent="sendFriendData">
      <input type="text" placeholder="Enter name.." v-model="addName" />
      <input
        type="text"
        placeholder="Enter phone number..."
        v-model="addPhone"
      />
      <input type="text" placeholder="Enter email...." v-model="addEmail" />
      <button class="addFriend">ADD FRIEND!</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      addName: "",
      addPhone: "",
      addEmail: "",
    };
  },
  methods: {
    sendFriendData() {
      this.$emit("add-friend", this.addName, this.addPhone, this.addEmail);
      this.addEmail = "";
      this.addName = "";
      this.addPhone = "";
    },
  },
};
</script>
<style>
#app input {
  padding: 0.15rem;
}
</style>
