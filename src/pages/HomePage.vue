<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <div>Home Page</div>
    </b-container>
  </div>
</template>

<script>

import { parseCsv } from '@/services/utility.service';
import { getFunction } from '@/services/predict.service';

export default {
  name: 'HomePage',

  async created() {
    parseCsv();
    getFunction();
  },

  async mounted() {
  },

  methods: {
  },
};
</script>

<style scoped>

</style>
