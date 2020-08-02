<template>
  <v-toolbar fixed>
    <v-card class="mx-auto" max-width="700" style="margin-top: -30px;">
      <v-app-bar app color="primary">
        <v-img
          :src="require('../../assets/Logo_ML@2x.png.png')"
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
        <v-btn icon outlined tile class="ml-3" max-height="40px">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    </v-card>
  </v-toolbar>
</template>
