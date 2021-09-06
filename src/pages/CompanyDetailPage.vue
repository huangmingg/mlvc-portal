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
          <!-- CHANGE THIS ABOVE -->
          <DisabledForm 
            @submitPrediction="submitPrediction"
          />
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>

import { getCompany } from '@/services/company.service';
import { router } from '@/routes';
import DisabledForm from '@/components/DisabledForm';

export default {
  name: 'CompanyDetailPage',
  component:{
    DisabledForm,
  },
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
