<template>
  <div>
    <h1>{{ $t("test") }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
  methods: {
    search: query => {
      console.log("query");
      console.log(query);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
