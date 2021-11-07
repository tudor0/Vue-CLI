<template>
  <div>
    <ul>
      <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user.name)">
          Name: {{ user.name }}, Age: {{ user.age }}
        </li>
      </transition-group>
    </ul>
    <div>
      <input type="text" ref="input" />
      <button @click="addUser">Add user</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: 'John',
          age: 30,
        },
        {
          name: 'Jane',
          age: 25,
        },
        {
          name: 'Bob',
          age: 20,
        },
      ],
    };
  },
  methods: {
    addUser() {
      const name = this.$refs.input.value;
      this.users.unshift({
        name,
        age: Math.floor(Math.random() * 30),
      });
      this.$refs.input.value = '';
    },
    removeUser(name) {
      this.users = this.users.filter((user) => user.name !== name);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.7s ease;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.user-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.user-list-move {
  transition: transform 0.7s ease;
}
.user-list-leave-active {
  position: absolute;
}
</style>
