<template>
  <div>
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:share:6069951887925354496"
      height="255"
      width="350"
      frameborder="0"
      allowfullscreen=""
      title="Embedded post"
    ></iframe>
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:share:6729862119690448896"
      height="425"
      width="504"
      frameborder="0"
      allowfullscreen=""
      title="Embedded post"
    ></iframe>
    <iframe
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/vETRegZjtLc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
