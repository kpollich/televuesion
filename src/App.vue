<template>
  <v-app dark>
    <site-header/>
    <router-view/>
  </v-app>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";

export default {
  name: "App",
  components: {
    "site-header": SiteHeader
  }
};
</script>

<style>
</style>
