<template>
  <div>
    <loader></loader>
  </div>
</template>

<script>
import loader from "@/components/_loader";

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
        params: {
          id: value
        }
      });
    }
  },
  data: () => ({}),
  methods: {}
};
</script>
