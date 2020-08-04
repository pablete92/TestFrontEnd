<template>
  <div>
    <loader></loader>
  </div>
</template>

<script>
import loader from "@/components/_loader";
import i18n from "@/i18n/es.json";

export default {
  name: "Home",
  components: {
    loader
  },
  computed: {
    searchWatch() {
      return this.$store.getters.search;
    }
  },
  watch: {
    searchWatch(value) {
      this.$router.push({
        name: "Items",
        query: {
          search: value
        }
      });
    }
  },
  data: () => ({}),
  methods: {}
};
</script>
