<template>
  <v-app-bar fixed>
    <v-card class="mx-auto" max-width="700" style="margin-top: -30px;">
      <v-app-bar app color="primary">
        <router-link :to="$t('externalLink.MLView')">
          <v-img
            :src="require('@/assets/Logo_ML@2x.png.png')"
            max-height="46px"
            max-width="80px"
            :contain="true"
          ></v-img>
        </router-link>
        <v-text-field
          :placeholder="$t('toolbar.searchPlaceholder')"
          outlined
          dense
          autocomplete="new-password"
          hide-details
          v-model="searchValue"
        ></v-text-field>
        <v-btn
          icon
          outlined
          tile
          class="ml-3"
          max-height="40px"
          :ripple="{ center: true }"
          @click="search"
        >
          <v-img
            :src="require('@/assets/ic_Search@2x.png.png')"
            :contain="true"
            block
            max-height="30px"
          ></v-img>
        </v-btn>
      </v-app-bar>
    </v-card>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppToolbar",
  computed: {
    searchWatch() {
      return this.$store.getters.search;
    },
  },
  watch: {
    searchWatch(value) {
      this.setModel(value);
    },
  },
  data: () => ({
    searchValue: String.prototype.Empty,
  }),
  methods: {
    search() {
      if (!this.searchValue || this.searchValue == this.$store.getters.search) {
        return;
      }

      this.$store.dispatch("search", this.searchValue);
    },
    setModel(value) {
      this.searchValue = value;
    },
  },
};
</script>
