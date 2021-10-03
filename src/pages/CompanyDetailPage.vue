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
          <b-col>
            <form>
              <div class="form-group">
                <label for="Name of Company">Name of Company</label>
                <input class="form-control" type="text" v-bind:placeholder="company.name" readonly>
              </div>
              <div class="form-group">
                <label for="Startup Location">Startup Location</label>
                <input class="form-control" type="text" v-bind:placeholder="company.location" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Employees">Number of Employees</label>
                <input class="form-control" type="text" v-bind:placeholder="company.employee" readonly>
              </div>
              <div class="form-group">
                <label for="Industries">Industries</label>
                <input class="form-control" type="text" v-bind:placeholder="company.industries" readonly>
              </div>
              <div class="form-group">
                <label for="Last Funding Round">Last Funding Round</label>
                <input class="form-control" type="text" v-bind:placeholder="company.last_funding_type" readonly>
              </div>
              <div class="form-group">
                <label for="Operating Status">Operating Status</label>
                <input class="form-control" type="text" v-bind:placeholder="company.operating_status" readonly>
              </div>
              <div class="form-group">
                <label for="Related Hubs">Related Hubs</label>
                <input class="form-control" type="text" v-bind:placeholder="company.related_hubs" readonly>
              </div>
              <div class="form-group">
                <label for="Investment Stage">Investment Stage</label>
                <input class="form-control" type="text" v-bind:placeholder="company.investment_stage" readonly>
              </div>
            </form>
          </b-col>
          <b-col>
            <form>
              <div class="form-group">
                <label for="Number of Funding Rounds">Number of Funding Rounds</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_funding_rounds" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Lead Investors">Number of Lead Investors</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_lead_investors" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Investors">Number of Investors</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_investors" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Funds">Number of Funds</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_funds" readonly>
              </div>
              <div class="form-group">
                <label for="Total Funding Amount">Total Funding Amount</label>
                <input class="form-control" type="text" v-bind:placeholder="company.total_funding_amount" readonly>
              </div>
              <div class="form-group">
                <label for="Total Funds Raised">Total Funds Raised</label>
                <input class="form-control" type="text" v-bind:placeholder="company.total_fund_raised" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Investments">Number of Investments</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_investments" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Lead Investments">Number of Lead Investments</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_lead_investments" readonly>
              </div>
            </form>
          </b-col>
          <b-col>
            <form>
              <div class="form-group">
                <label for="Number of Diversity Investments">Number of Diversity Investments</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_diversity_investments" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Acquisitions">Number of Acquisitions</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_acquisitions" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Exits">Number of Exits</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_exits" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Board Members and Advisor Profiles">Number of Board Members and Advisor Profiles</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_board_member_and_advisor_profiles" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Employee Profiles">Number of Employee Profiles</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_employee_profiles" readonly>
              </div>
              <div class="form-group">
                <label for="Total Products Active">Total Products Active</label>
                <input class="form-control" type="text" v-bind:placeholder="company.total_products_active" readonly>
              </div>
              <div class="form-group">
                <label for="Monthly Visits">Monthly Visits</label>
                <input class="form-control" type="text" v-bind:placeholder="company.monthly_visits" readonly>
              </div>
              <div class="form-group">
                <label for="Monthly Visits Growth">Monthly Visits Growth</label>
                <input class="form-control" type="text" v-bind:placeholder="company.monthly_visits_growth" readonly>
              </div>
            </form>
          </b-col>
          <b-col>
            <form>
              <div class="form-group">
                <label for="Active Tech Count">Active Tech Count</label>
                <input class="form-control" type="text" v-bind:placeholder="company.active_tech_count" readonly>
              </div>
              <div class="form-group">
                <label for="Total Funds Raised">Number of Employees</label>
                <input class="form-control" type="text" v-bind:placeholder="company.total_fund_raised" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Articles">Number of Articles</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_articles" readonly>
              </div>
              <div class="form-group">
                <label for="Number of Events">Number of Events</label>
                <input class="form-control" type="text" v-bind:placeholder="company.number_of_events" readonly>
              </div>
              <div class="form-group">
                <label for="Valuation at IPO">Valuation at IPO</label>
                <input class="form-control" type="text" v-bind:placeholder="company.valuation_at_ipo" readonly>
              </div>
              <div class="form-group">
                <label for="Money Raised at IPO">Money Raised at IPO</label>
                <input class="form-control" type="text" v-bind:placeholder="company.money_raised_at_ipo" readonly>
              </div>
              <div class="form-group">
                <label for="Last Funding">Last Funding</label>
                <input class="form-control" type="text" v-bind:placeholder="company.last_funding" readonly>
              </div>
              <div class="form-group">
                <label for="Downloads in the last 30 days">Downloads in the last 30 days</label>
                <input class="form-control" type="text" v-bind:placeholder="company.downloads_last_30_days" readonly>
              </div>
            </form>
          </b-col>
          <!-- <div>
            Name of Company: {{ company.name }}
            <br>
            Startup Location: {{ company.location }}
            <br>
            Number of Employees: {{ company.employee }}
            <br>
            Industries: {{ company.industries }}
            <br>
            Last Funding Round: {{ company.last_funding_type }}
            <br>
            Operating Status: {{ company.operating_status }}
            <br>
            Related Hubs: {{ company.related_hubs }}
            <br>
            Investment Stage: {{ company.investment_stage }}
            <br>
            Number of Funding Rounds: {{ company.number_of_funding_rounds }}
            <br>
            Number of Lead Investors: {{ company.number_of_lead_investors }}
            <br>
            Number of Investors: {{ company.number_of_investors }}
            <br>
            Number of Funds: {{ company.number_of_funds }}
            <br>
            Total Funding Amount: {{ company.total_funding_amount }}
            <br>
            Total Funds Raised: {{ company.total_fund_raised }}
            <br>
            Number of Investments: {{ company.number_of_investments }}
            <br>
            Number of Lead Investments: {{ company.number_of_lead_investments}}
            <br>
            Number of Diversity Investments: {{ company.number_of_diversity_investments }}
            <br>
            Number of Acquisitions: {{ company.number_of_acquisitions }}
            <br>
            Number of Exits: {{ company.number_of_exits }}
            <br>
            Number of Board Members and Advisor Profiles: {{ company.number_of_board_member_and_advisor_profiles }}
            <br>
            Number of Employee Profiles: {{ company.number_of_employee_profiles }}
            <br>
            Total Products Active: {{ company.total_products_active }}
            <br>
            Monthly Visits: {{ company.monthly_visits }}
            <br>
            Monthly Visits Growth: {{ company.monthly_visits_growth }}
            <br>
            Active Tech Count: {{ company.active_tech_count }}
            <br>
            Total Funds Raised: {{ company.total_fund_raised }}
            <br>
            Number of Articles: {{ company.number_of_articles }}
            <br>
            Number of Events: {{ company.number_of_events }}
            <br>
            Valuation at IPO: {{ company.valuation_at_ipo }}
            <br>
            Money Raised at IPO: {{ company.money_raised_at_ipo }}
            <br>
            Last Funding: {{ company.last_funding }}
            <br>
            Downloads in the last 30 days: {{ company.downloads_last_30_days }}
            <br>
            Price: {{ company.price }}
            <br>
          </div> -->
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>

import { getCompany } from '@/services/company.service';
import { router } from '@/routes';
// import DisabledForm from '@/components/DisabledForm';

export default {
  name: 'CompanyDetailPage',
  component:{
    // DisabledForm,
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
