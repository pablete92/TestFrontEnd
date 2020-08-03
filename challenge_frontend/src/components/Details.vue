<template>
  <div>
    <p>{{ $route.params.id }}</p>
    <p>{{ filters }}</p>
  </div>
</template>

<script>
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
  data: () => ({
    filters: ""
  })
};
</script>
