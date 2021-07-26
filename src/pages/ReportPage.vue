<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <b-row>
        {{ prediction.name }}
        <br>
        Prediction: {{ prediction.success }}
      </b-row>
      <b-row>
        <b-col>
          <ScatterPlot />
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col>
          <MapChart />
        </b-col>
        <b-col>
          <PolarChart />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import { store } from '@/stores';
import PolarChart from '@/components/PolarChart';
import ScatterPlot from '@/components/ScatterPlot';
import MapChart from '@/components/MapChart';

export default {
  name: 'ReportPage',
  components: {
    ScatterPlot,
    PolarChart,
    MapChart,
  },
  computed: {
    prediction() {
      return store.getters.getPrediction;
    },
  },
  created() {
  },
};
</script>

<style scoped>

</style>
