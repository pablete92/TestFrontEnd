<template>
  <div>
    <loader></loader>
    <h5>{{ filters }}</h5>
    <v-row no-gutters>
      <template v-for="n in response">
        <v-col :key="n.id" class="mb-2">
          <v-card class="pa-2" outlined tile @click="click(n)">
            <v-row>
              <v-img
                :src="n.thumbnail"
                :contain="true"
                block
                max-height="150px"
              >
              </v-img>
              <v-col>
                <h1>{{ n.price | currency }}</h1>
                <h3>{{ n.title }}</h3>
              </v-col>
              <p class="ml-2 mr-3">{{ n.address.state_name }}</p>
            </v-row>
          </v-card>
        </v-col>
        <v-responsive :key="`width-${n.id}`" width="100%"></v-responsive>
      </template>
    </v-row>
  </div>
</template>

<script>
import loader from "@/components/_loader";
import { ServicesFactory } from "@/services/servicesFactory";
import i18n from "@/i18n/es.json";

let servicesSearch = ServicesFactory.get(i18n.services.search);

export default {
  name: "Items",
  components: {
    loader
  },
  mounted() {
    this.search();
  },
  computed: {
    searchWatch() {
      return this.$store.getters.search;
    }
  },
  watch: {
    searchWatch(value) {
      this.search(value);
    }
  },
  data: () => ({
    response: [],
    filters: ""
  }),
  methods: {
    async search(value) {
      this.$store.dispatch("setLoader", true);

      let query = value === undefined ? this.$route.params.id : value;

      await servicesSearch
        .getSearch(query)
        .then(response => {
          if (!response) {
            return;
          }

          this.response = response.data.results.slice(0, 4);

          this.filters = "";

          if (response.data.filters.length > 0) {
            this.filters = response.data.filters[0].values[0].name;

            response.data.filters[0].values[0].path_from_root.forEach(
              (item, key) => {
                this.filters = `${this.filters} > ${item.name}`;
              }
            );
          }
        })
        .finally(() => {
          this.searchSuccess = true;
          this.$store.dispatch("setLoader", false);
        });
    },
    click(value) {
      this.$router.push({
        name: "Details",
        params: {
          id: value.id,
          filters: this.filters
        }
      });
    }
  }
};
</script>
