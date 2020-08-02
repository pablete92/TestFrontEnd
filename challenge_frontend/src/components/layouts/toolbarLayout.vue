<template>
  <v-toolbar fixed>
    <v-card class="mx-auto" max-width="700" style="margin-top: -30px;">
      <v-app-bar app color="primary">
        <v-img
          :src="require('@/assets/Logo_ML@2x.png.png')"
          max-height="46px"
          max-width="80px"
          :contain="true"
        >
        </v-img>
        <v-text-field
          :placeholder="$t('toolbar.searchPlaceholder')"
          outlined
          dense
          hide-details
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
          >
          </v-img>
        </v-btn>
      </v-app-bar>
    </v-card>
  </v-toolbar>
</template>

<script>
import { ServicesFactory } from "@/services/servicesFactory";
import i18n from "@/i18n/es.json";

let servicesSearch = ServicesFactory.get(i18n.services.search);

export default {
  data: () => ({}),
  methods: {
    async search() {
      console.log("lala");
      await servicesSearch.getSearch("Apple ipod").then(response => {
        this.$emit("search", response);
      });
    }
  }
};
</script>
