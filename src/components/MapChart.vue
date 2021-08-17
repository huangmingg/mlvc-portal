<template>
  <highcharts 
    :constructor-type="'mapChart'"
    :options="chartOptions" 
  />
</template>
<script>

import { Chart } from 'highcharts-vue';
import HighCharts from 'highcharts';
import worldMap from '@highcharts/map-collection/custom/world.geo.json';
import HighchartsMapModule from 'highcharts/modules/map';

HighchartsMapModule(HighCharts);

export default {
  name: 'MapChart',
  components: {
    highcharts: Chart,
  },
  props: {
    title: {
      type: String,
      default: function () {
        return '';
      },
    },
    subtitle: {
      type: String,
      default: function () {
        return '';
      },
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          map: worldMap,
        },
        title: {
          text: this.title,
        },
        subtitle: {
          text: this.subtitle,
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox',
          },
        },
        colorAxis: {
          min: 0,
        },
        series: [{
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55',
            },
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
          },
          allAreas: false,
          data: [
            ['jp', 69],
          ],
        }],
      },
    };
  },
};
</script>

<style scoped>

</style>
