<template>
  <v-app id="inspire" class="app dashboard">
    <app-toolbar class="app--toolbar" @search="search"></app-toolbar>
  </v-app>
</template>

<script>
import AppToolbar from "@/components/layouts/toolbarLayout";

export default {
  components: {
    AppToolbar
  },
  methods: {
    search(query) {
      console.log(query);
    }
  }
};
</script>
