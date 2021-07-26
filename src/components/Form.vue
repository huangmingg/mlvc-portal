<template>
  <b-form @submit="onSubmit">
    <b-row>
      <h5 class="mx-3">
        Interested to know how your startup is faring? Fill up the form to receive real time insights
      </h5>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <b-form-group
          id="input-group-1"
          label="Name of Company"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            :state="nameState"
            required
          />
        </b-form-group>

        <b-form-group 
          id="input-group-7"
          label="Company Type"
          label-for="input-7"
        >
          <b-form-radio-group
            id="input-7"
            v-model="form.companyType"
            :options="companyTypeOptions"
            name="radio-options-slots"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Industries (Select all that applies)"
          label-for="input-2"
        >
          <multiselect 
            id="input-2"
            v-model="form.industries" 
            :multiple="true" 
            :options="industryOptions"
          />
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Number of Employees:"
          label-for="input-3"
        >
          <multiselect 
            id="input-3"
            v-model="form.employee" 
            :options="employeeOptions"
          />
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Last Funding Round:"
          label-for="input-4"
        >
          <multiselect 
            id="input-4"
            v-model="form.lastFundingType" 
            :options="lastFundingTypeOptions"
          />
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Founded Date:"
          label-for="input-6"
        >
          <b-form-datepicker
            id="input-6"
            v-model="form.foundedAt"
            date
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Description:"
          label-for="input-5"
        >
          <b-form-textarea
            id="input-5"
            v-model="form.description"
            :state="descriptionState"
            type="text"
            rows="5"
            required
          />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="input-group-8"
          label="Number of Employee Profile"
          label-for="input-8"
        >
          <b-form-input
            id="input-8"
            v-model="form.numberOfEmployeeProfile"
            type="number"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-9"
          label="Total Number of Active Product"
          label-for="input-9"
        >
          <b-form-input
            id="input-9"
            v-model="form.totalProductActive"
            type="number"
            required
          />
        </b-form-group>


        <b-form-group
          id="input-group-10"
          label="(Skip if not applicable) Valuation at IPO (USD)"
          label-for="input-10"
        >
          <b-form-input
            id="input-10"
            v-model="form.valuationAtIpo"
            type="number"
          />
        </b-form-group>

        <b-form-group
          id="input-group-11"
          label="(Skip if not applicable) Amount raised at IPO (USD)"
          label-for="input-11"
        >
          <b-form-input
            id="input-11"
            v-model="form.moneyRaisedAtIpo"
            type="number"
          />
        </b-form-group>

        <b-form-group
          id="input-group-12"
          label="Number of acquisitions"
          label-for="input-12"
        >
          <b-form-input
            id="input-12"
            v-model="form.numberOfAcquisitions"
            type="number"
          />
        </b-form-group>

        <b-form-group
          id="input-group-13"
          label="Number of investments"
          label-for="input-13"
        >
          <b-form-input
            id="input-13"
            v-model="form.numberOfInvestments"
            type="number"
          />
        </b-form-group>

        <b-form-group
          id="input-group-14"
          label="Number of lead investments"
          label-for="input-14"
        >
          <b-form-input
            id="input-14"
            v-model="form.numberOfLeadInvestments"
            type="number"
          />
        </b-form-group>

        <b-form-group
          id="input-group-15"
          label="Number of lead investors"
          label-for="input-15"
        >
          <b-form-input
            id="input-15"
            v-model="form.numberOfLeadInvestors"
            type="number"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col />
      <b-col>
        <b-button
          class="float-right"
          variant="info"
          @click="onSubmit"
        >
          Submit
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>

import Multiselect from 'vue-multiselect';
import { employees } from '@/data/employee';
import { industries } from '@/data/industry';
import { lastFundingTypes } from '@/data/lastFundingType';

export default {
  name: 'PredictPage',
  components: {
    Multiselect,
  },
  data() {
    return {
      companyTypeOptions: [
        'For Profit',
        'Non Profit',
      ],
      employeeOptions: employees,
      industryOptions: industries,
      lastFundingTypeOptions: lastFundingTypes,
      form: {
        name: 'Test Company',
        companyType: 'For Profit',
        employee: '11-50',
        description: 'Test Description',
        foundedAt: '2021-07-23',
        lastFundingType: 'Series A',
        valuationAtIpo: 500000,
        moneyRaisedAtIpo: 100000,
        numberOfAcquisitions: 3,
        numberOfInvestments: 4,
        numberOfLeadInvestments: 5,
        numberOfLeadInvestors: 6,
        totalProductActive: 10,
        numberOfEmployeeProfile: 45,
        industries: [],
      },
    };
  },

  computed: {
    descriptionState() {
      return this.edit ? this.form.description?.length > 10 ? true : false : null;
    },
    nameState() {
      return this.edit ? this.form.name?.length > 2 ? true : false : null;
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submitPrediction', this.form);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
