export default {
  getCounter(state) {
    return state.counter;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.getCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  },
};
