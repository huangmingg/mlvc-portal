<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <b-card-title class="mx-2">
        Crunchbase Company Data
      </b-card-title>
      <hr>
      <b-table
        responsive
        fixed 
        sticky-header="600px"
        bordered
        selectable
        select-mode="single"
        :items="companyServiceProvider"
        :busy.sync="isBusy"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :current-page="currentPage"
        :per-page="perPage"
        @row-selected="rowSelected"
      />
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          first-number
          last-number
          align="fill"
          size="sm"
          class="my-0"
        />
      </b-col>
    </b-container>
  </div>
</template>

<script>

import { getCompanies } from '@/services/company.service';
import { router } from '@/routes';

export default {
  name: 'CompanyListPage',
  data() {
    return {
      fields: [
        {
          key: 'id',
          sortable: false,
        },
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'location',
          sortable: true,
        },
        {
          key: 'employee',
          label: 'Number of employees',
          sortable: true,
        },
        {
          key: 'last_funding_type',
          sortable: true,
        },
      ],
      isBusy: false,
      sortBy: 'id',
      sortDesc: false,
      currentPage: 1,
      perPage: 20,
      totalRows: 20000,
    };
  },
  methods: {
    rowSelected(company_array) {
      const company = company_array.length ? company_array[0] : null;
      router.push(`company/${company?.id}`);
    },
    async companyServiceProvider(ctx) {
      try 
      {
        const companies = await getCompanies(ctx.currentPage, this.perPage, ctx.sortBy, ctx.sortDesc);
        return companies;
      } catch (error) 
      {
        return [];
      }
    },
  },
};
</script>

<style scoped>

</style>
