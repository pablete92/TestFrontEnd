<template>
  <div>
    <loader></loader>
    <h5>{{ filters }}</h5>
  </div>
</template>

<script>
import { ServicesFactory } from "@/services/servicesFactory";
import i18n from "@/i18n/es.json";
import loader from "@/components/_loader";

let servicesSearch = ServicesFactory.get(i18n.services.search);

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
    async searchWatch(value) {
      await servicesSearch
        .getSearch(value)
        .then(response => {
          if (!response) {
            return;
          }

          this.filters = `${response.data.filters[0].values[0].name}`;

          response.data.filters[0].values[0].path_from_root.forEach(
            (item, key) => {
              this.filters = `${this.filters} > ${item.name}`;
            }
          );

          console.log(this.filters);
        })
        .finally(() => this.$store.dispatch("setLoader", false));
    }
  },
  data: () => ({
    filters: ""
  }),
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
