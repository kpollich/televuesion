<template>
  <v-container>
    <h1>TeleVUEsion</h1>
    <h2>Detail page for {{ $route.params.id }}</h2>

    <pre>{{JSON.stringify(data, null, 2)}}</pre>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowDetailPage",
  created() {
    this.fetchData();
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    async fetchData() {
      const endpoint = `https://www.omdbapi.com/?apikey=90f4c086&s&i=${
        this.$route.params.id
      }`;

      const { data } = await axios.get(endpoint);
      this.data = data;
    }
  }
};
</script>
