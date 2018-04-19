<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs4 v-for="result in results" v-bind:key="result.imdbID">
        <v-card :to="`/shows/${result.imdbID}`" class="result-card">
          <v-card-media :src="result.Poster" height="400px">
          </v-card-media>
          <v-card-title primary-title>
            <h3 class="headline">{{ result.Title }}</h3>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.result-card {
  transition: all 200ms;
}

.result-card:hover {
  transform: scale(1.05);
}
</style>


<script>
export default {
  name: "SearchResults",
  props: ["results"]
};
</script>
