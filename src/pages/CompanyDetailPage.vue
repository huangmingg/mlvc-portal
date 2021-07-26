<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <b-row class="mx-2">
        <b-button
          variant="info"
          @click="back"
        >
          Back
        </b-button>
      </b-row>
      <hr class="dropdown-divider">
      <b-form class="mx-3">
        <b-row>
          {{ company.name }}
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>

import { getCompany } from '@/services/company.service';
import { router } from '@/routes';

export default {
  name: 'CompanyDetailPage',
  data() {
    return {
      companyId: '',
      company: {},
    };
  },

  async created() {
    this.companyId = this.$route.params.id;
    this.company = await getCompany(this.companyId);
  },
  async mounted() {
  },
  methods: {
    back() {
      router.back();
    },
  },
};
</script>

<style scoped>

</style>
