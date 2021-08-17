<template>
  <b-container
    fluid
    class="p-4 bg-light"
  >
    <b-row class="mx-2">
      <b-card-title >
        {{ prediction.company.name }} Report
      </b-card-title>
    </b-row>
    <hr>
    <b-row class="mx-2">
      <b-card-text>
        Based on your submission, {{ prediction.company.name }} is likely to {{ prediction.success }}
      </b-card-text>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <PolarChart 
          :title="'Company Investment Statistics'"
          :name="response.company.name"
          :max="360"
          :min="0"
          :attribute="companyInvestmentKey"
          :map="companyInvestmentMap"
          :lower="formatObjectToChartList(response.investmentStats.lower, companyInvestmentKey)"
          :median="formatObjectToChartList(response.investmentStats.median, companyInvestmentKey)"
          :upper="formatObjectToChartList(response.investmentStats.upper, companyInvestmentKey)"
          :company="formatObjectToChartList(response.company, companyInvestmentKey)"
        />
      </b-col>
      <b-col>
        <PolarChart 
          :title="'Company Detail Statistics'"
          :name="response.company.name"
          :max="360"
          :min="0"
          :attribute="companyCategoryKey"
          :map="companyCategoryMap"
          :lower="formatObjectToChartList(response.companyStats.lower, companyCategoryKey)"
          :median="formatObjectToChartList(response.companyStats.median, companyCategoryKey)"
          :upper="formatObjectToChartList(response.companyStats.upper, companyCategoryKey)"
          :company="formatObjectToChartList(response.company, companyCategoryKey)"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <MapChart />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import { store } from '@/stores';
import PolarChart from '@/components/PolarChart';

// import ScatterPlot from '@/components/ScatterPlot';
import MapChart from '@/components/MapChart';
import { categoryKey, categoryMap } from '@/data/charts/companyCategory';
import { investmentKey, investmentMap } from '@/data/charts/companyInvestment';


export default {
  name: 'ReportPage',
  components: {
    // ScatterPlot,
    PolarChart,
    MapChart,
  },
  props: {
    response: {
      type: Object,
      default: function () {
        return {
          success: Boolean,
          name: String,
          companyStats: Object,
        };
      },
    },
  },
  data() {
    return {
      companyCategoryKey: categoryKey,
      companyCategoryMap: categoryMap,
      companyInvestmentKey: investmentKey,
      companyInvestmentMap: investmentMap,
    };
  },
  computed: {
    prediction() {
      return store.getters.getPrediction;
    },
  },
  methods: {
    formatObjectToChartList(object, keys) {
      const output = [];
      for (const c of keys) { 
        output.push(+object[c]);
      }
      return output;
    },
  },
};
</script>

<style scoped>

</style>
