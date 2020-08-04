<template>
  <div>
    <loader></loader>
    <p>{{ filters }}</p>
    <v-card class="mx-auto" max-width="90%" max-height="90%">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img :src="item.thumbnail" :contain="true" block> </v-img>
          </v-col>
          <v-col>
            <p>
              {{ item.condition }} - {{ item.sold_quantity }}
              {{ $t("details.sold") }}
            </p>
            <h3>{{ item.title }}</h3>
            <h2>{{ item.price | currency }}</h2>
            <v-btn class="secondary text-capitalize"
              >{{ $t("details.btnBuy") }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col cols="auto">
            <h2>{{ $t("details.productDescriptionTitle") }}</h2>
            <p class="mt-3">{{ itemDescription.plain_text }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import loader from "@/components/_loader";
import { ServicesFactory } from "@/services/servicesFactory";
import i18n from "@/i18n/es.json";

let servicesItem = ServicesFactory.get(i18n.services.item);

export default {
  props: {
    filtersProps: {
      type: String
    }
  },
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
      this.search(value);
    }
  },
  created() {
    if (this.filtersProps) {
      this.filters = this.filtersProps;
    }
  },
  mounted() {
    this.$store.dispatch("setLoader", true);

    this.searchItem(this.$route.params.id);
  },
  data: () => ({
    filters: "",
    item: [],
    itemDescription: []
  }),
  methods: {
    async searchItem(value) {
      await servicesItem.getItemById(value).then(response => {
        if (!response) {
          return;
        }

        this.item = response.data;
        this.searchItemDescription(value);
      });
    },
    async searchItemDescription(value) {
      await servicesItem
        .getDescriptionById(value)
        .then(response => {
          if (!response) {
            return;
          }

          this.itemDescription = response.data;
        })
        .finally(() => this.$store.dispatch("setLoader", false));
    },
    search(value) {
      this.$router.push({
        name: "Items",
        query: {
          search: value
        }
      });
    }
  }
};
</script>
<style scoped></style>
