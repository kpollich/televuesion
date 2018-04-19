<template>
  <v-container>
    <search-form></search-form>
  </v-container>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  name: "HomePage",
  components: {
    "search-form": SearchForm
  }
};
</script>

<style scoped>
</style>
