<template>
  <v-container grid-list-md>
    <div v-if="!show">
      Loading..
    </div>
    <v-layout v-else row wrap>
      <v-flex md9>
        <v-layout row wrap>
          <v-flex md6>
            <h1>{{ show.Title }}</h1>
          </v-flex>
          <v-flex md6>
            <h1>Rating: {{show.imdbRating}}</h1>
          </v-flex>
          <v-flex md12>
            <div class="headline">
              {{ show.Plot }}
            </div>
          </v-flex>
          <v-flex md3 class="dates">
            <p>Year: {{ show.Year }}</p>
            <p>Released: {{ show.Released }}</p>
            <p>Seasons: {{ show.totalSeasons }}</p>
          </v-flex>
        </v-layout>

      </v-flex>
      <v-flex md3>
        <img :src="show.Poster" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.dates p {
  margin: 0;
}
</style>

<script>
import axios from "axios";

export default {
  name: "ShowDetailPage",
  created() {
    this.fetchData();
  },
  data() {
    return {
      show: null
    };
  },
  methods: {
    async fetchData() {
      const endpoint = `https://www.omdbapi.com/?apikey=90f4c086&s&i=${
        this.$route.params.id
      }`;

      const response = await axios.get(endpoint);
      this.show = response.data;
    }
  }
};
</script>
