<template>
  <div>
    <h2>Please evaluate your experience:</h2>
    <ul>
      <li :class="{ active: modelValue === 'poor' }">
        <button type="button" @click="activate('poor')">Poor</button>
      </li>
      <li :class="{ active: modelValue === 'average' }">
        <button type="button" @click="activate('average')">Average</button>
      </li>
      <li :class="{ active: modelValue === 'great' }">
        <button type="button" @click="activate('great')">Great</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: dodgerblue;
}
.active button {
  color: dodgerblue;
}
ul {
  list-style: none;
  display: flex;
  margin: 0.5rem 0;
  padding: 0;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
