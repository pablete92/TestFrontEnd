<template>
  <v-app id="inspire" class="app dashboard">
    <app-toolbar class="app--toolbar"></app-toolbar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import AppToolbar from "@/components/layouts/toolbarLayout";

export default {
  name: "HomeLayout",
  components: {
    AppToolbar
  }
};
</script>
