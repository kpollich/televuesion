<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field label="Enter a TV show" v-model="query">
    </v-text-field>

    <search-results v-bind:results="results" />
  </v-form>
</template>

<script>
import axios from "axios";

import SearchResults from "./SearchResults";

export default {
  name: "SearchForm",
  components: {
    "search-results": SearchResults
  },
  data() {
    return {
      query: "",
      results: null
    };
  },
  methods: {
    async handleSubmit() {
      const { query } = this;
      const endpoint = `http://www.omdbapi.com/?apikey=90f4c086&s=${query}&type=series`;

      const response = await axios.get(endpoint);
      const results = response.data.Search;

      this.results = results;
    }
  }
};
</script>

<style scoped>
</style>
