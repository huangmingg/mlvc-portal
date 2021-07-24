<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
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
              id="input-group-4"
              label="Description:"
              label-for="input-4"
            >
              <b-form-textarea
                id="input-4"
                v-model="form.description"
                :state="descriptionState"
                type="text"
                required
              />
            </b-form-group>


          </b-col>

          <b-col>
            <b-form-group
              id="input-group-1"
              label="Company Name:"
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
              label="Founded Date:"
              label-for="input-3"
            >
              <b-form-datepicker
                id="input-7"
                v-model="form.foundedAt"
                date
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
          </b-col>
          <b-col>
            <b-button
                class="float-right"
                variant="info"
                type="submit"
              >
                Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>

import Multiselect from 'vue-multiselect';

export default {
  name: 'PredictPage',
  components: {
    Multiselect,
  },
  data() {
    return {
      industryOptions: [
        'Banking', 
        'Internet', 
        'Financial Services', 
        'Mobile Apps',
      ],
      employeeOptions: [
        '1-10', 
        '11-50',  
        '51-100', 
        '101-250', 
        '251-500',
        '501-1000', 
        '1001-5000', 
        '5001-10000', 
        '10001+',
      ],
      lastFundingTypeOptions: [
        'Grant', 
        'Angel', 
        'Pre-Seed', 
        'Seed', 
        'Series A',
        'Series B',
        'Series C',
        'Series D',
        'Series E',
        'Series F',
        'Series G',
        'Series H', 
        'Series I', 
        'Debt Financing', 
        'Private Equity', 
        'Initial Coin Offering', 
        'Venture - Series Unknown', 
        'Equity Crowdfunding', 
        'Secondary Market', 
        'Post-IPO Secondary',
        'Post-IPO Equity',
        'Post-IPO Debt',
        'Product Crowdfunding',
        'Corporate Round',
        'Convertible Note',
        'Undisclosed',         
        'Non-equity Assistance',
      ],
      form: {
        name: '',
        employee: '',
        description: '',
        foundedAt: '',
        lastFundingType: '',
        industries: [],
      },
      units: ['Carton', 'Kg', 'Ml', 'Box', 'Gram', 'Pax'],
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

  async created() {
  },

  async mounted() {
  },

  methods: {
    async onSubmit(event) {
      console.log('submitting form');
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
