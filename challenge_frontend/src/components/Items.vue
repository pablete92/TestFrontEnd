<template>
  <div>
    <loader></loader>
    <h5>{{ filters }}</h5>
    <v-row no-gutters>
      <template v-for="n in pagination.rowsPerPage" :pagination="pagination">
        <v-col :key="n" class="mb-2">
          <v-card class="pa-2" outlined tile @click="click(response[n * pagination.page])">
            <v-row v-if="response[n * pagination.page]">
              <v-img
                :src="response[n * pagination.page].thumbnail"
                :contain="true"
                block
                max-height="150px"
              ></v-img>
              <v-col>
                <h1>{{ response[n * pagination.page].price | currency }}</h1>
                <v-img
                  :lazy-src="require('@/assets/ic_shipping@2x.png.png')"
                  :contain="true"
                  block
                  max-height="30px"
                  v-if="response[n * pagination.page].shipping.free_shipping"
                ></v-img>
                <h3>{{ response[n * pagination.page].title }}</h3>
              </v-col>
              <p class="ml-2 mr-3">{{ response[n * pagination.page].address.state_name }}</p>
            </v-row>
          </v-card>
        </v-col>
        <v-responsive :key="`width-${n}`" width="100%"></v-responsive>
      </template>
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <v-pagination
              v-model="pagination.page"
              :length.sync="pagination.pages"
              :total-visible="7"
              color="secondary"
              circle
            ></v-pagination>
          </v-flex>
        </v-layout>
      </v-container>
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
    loader,
  },
  mounted() {
    this.search(this.$route.query.search);
  },
  computed: {
    searchWatch() {
      return this.$store.getters.search;
    },
  },
  watch: {
    searchWatch(value) {
      this.search(value);
    },
    pagination() {
      this.pagination.pages = Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    },
  },
  data: () => ({
    response: [],
    filters: String.prototype.Empty,
    pagination: {
      rowsPerPage: 4,
      descending: true,
      page: 1,
    },
  }),
  methods: {
    async search(value) {
      this.$store.dispatch("setLoader", true);

      if (value != this.$store.getters.search) {
        this.$store.dispatch("search", value);
        return;
      } else if (value != this.$route.query.search) {
        this.$router.replace({
          name: "Items",
          query: {
            search: value,
          },
        });
      }

      await servicesSearch
        .getSearch(value)
        .then((response) => {
          if (!response) {
            return;
          }

          this.response = response.data.results;

          this.pagination.totalItems = this.response.length;
          this.pagination.page = 1;
          this.pagination.pages = Math.ceil(
            this.pagination.totalItems / this.pagination.rowsPerPage
          );

          this.filters = String.prototype.Empty;

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
          this.$store.dispatch("setLoader", false);
        });
    },
    click(value) {
      this.$router.push({
        name: "Details",
        params: {
          id: value.id,
          filtersProps: this.filters,
        },
      });
    },
  },
};
</script>
