<template>
  <v-dialog v-model="show" fullscreen>
    <v-container
      fluid
      fill-height
      style="background-color: rgba(255, 255, 255, 0.5);"
    >
      <v-layout justify-center align-center>
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: "Loader",
  data: () => ({
    show: false
  }),
  computed: {
    isLoading: {
      get() {
        return this.$store.getters.isLoading;
      },
      set() {
        this.show = false;
        return this.$store.getters.isLoading;
      }
    }
  },
  created() {
    if (this.$store.getters.isLoading) {
      this.$store.dispatch("setLoader", false);
    }
  },
  watch: {
    isLoading(value) {
      this.show = value;
    }
  }
};
</script>
