<template>
  <div>
    <p>{{ filters }}</p>
    <v-img :src="item.thumbnail" :contain="true" block max-height="150px">
    </v-img>
  </div>
</template>

<script>
import { ServicesFactory } from "@/services/servicesFactory";
import i18n from "@/i18n/es.json";

let servicesItem = ServicesFactory.get(i18n.services.item);

export default {
  props: {
    filtersProps: {
      type: String
    }
  },
  created() {
    if (this.filtersProps) {
      this.filters = this.filtersProps;
    }
  },
  mounted() {
    this.searchItem(this.$route.params.id);
  },
  data: () => ({
    filters: "",
    item: []
  }),
  methods: {
    async searchItem(value) {
      this.$store.dispatch("setLoader", true);
      await servicesItem
        .getItemById(value)
        .then(response => {
          if (!response) {
            return;
          }

          console.log(response);
          this.item = response.data;
        })
        .finally(() => this.$store.dispatch("setLoader", false));
    }
  }
};
</script>
