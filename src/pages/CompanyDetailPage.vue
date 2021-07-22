<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      Company Detail Page
    </b-container>
  </div>
</template>

<script>

import { store } from '@/stores';

export default {
  name: 'CompanyDetailPage',
  data() {
    return {
      companyId: '',
    };
  },
  computed: {
    items() {
      return store.getters.getCompanyList;
    },
  },
  async created() {
    this.companyId = this.$route.params.id;
    console.log(this.companyId);
  },
  async mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
