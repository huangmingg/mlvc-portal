<template>
  <highcharts 
    :options="chartOptions" 
  />
</template>
<script>

import { Chart } from 'highcharts-vue';
import HighCharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(HighCharts);

export default {
  name: 'CompanyPolarChart',
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
    name: {
      type: String,
      default: function () {
        return '';
      },
    },    
    min: {
      type: Number,
      default: function () {
        return 0;
      },
    },
    max: {
      type: Number,
      default: function () {
        return 360;
      },
    },
    attribute: {
      type: Array,
      default: function () {
        return [];
      },
    },
    map: {
      type: Object,
      default: function () {
        return {};
      },
    },
    lower: {
      type: Array,
      default: function () {
        return [];
      },
    },
    company: {
      type: Array,
      default: function () {
        return [];
      },
    },
    median: {
      type: Array,
      default: function () {
        return [];
      },
    },
    upper: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          polar: true,
        },
        title: {
          text: this.title,
        },
        subtitle: {
          text: this.subtitle,
        },
        pane: {
          startAngle: this.min,
          endAngle: this.max,
        },
        xAxis: {
          tickInterval: this.max / (this.attribute.length || 1),
          min: this.min,
          max: this.max,
          categories: this.getCategoryLabel(),
        },
        yAxis: {
          min: 0,
        },
        plotOptions: {
          series: {
            pointStart: this.min,
            pointInterval: this.max / (this.attribute.length || 1),
          },
          column: {
            pointPadding: 0,
            groupPadding: 0,
          },
        },
        series: [{
          type: 'line',
          name: 'Upper',
          color: '#FFA500',
          data: this.upper,
        }, {
          type: 'line',
          name: 'Lower',
          color: '#808080',
          data: this.lower,
        }, {
          type: 'line',
          name: 'Median',
          color: '#FF0000',
          data: this.median,
        }, {
          type: 'area',
          name: this.name,
          data: this.company,
        }],
      },
    };
  },
  methods: {
    getCategoryLabel() {
      const arr = new Array(this.max);
      const interval = this.max / (this.attribute.length || 1);
      let index = 0;
      for (let x = this.min; x < this.max; x = x + interval) {
        const value = this.map[this.attribute[index]];
        index += 1;
        arr[x] = value;
      }
      return arr;
    },
  },
};
</script>

<style scoped>

</style>
