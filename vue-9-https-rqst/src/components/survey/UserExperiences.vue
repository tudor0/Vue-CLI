<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getServerData"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading..</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some first
      </p>

      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
          :desc="result.desc"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    getServerData() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-http-demo-c723d-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
              desc: data[id].description,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          this.error = 'Failed to fetch data, please try again later';
          console.log('error here', error);
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getServerData();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
