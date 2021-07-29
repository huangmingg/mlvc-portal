<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light background-container"
      style=" margin-top: 3%; width: 70%"
    >
      <div
        class="container100"
      >
        <div
          class="container50"
        >
          <div
            class="container50-2"
          >
            <h2 style="margin-bottom: 10px;">
              About Project
            </h2>
            <p>
              The MLVC project is an web application that aims to provide startup founders insight into into their
              startup's position within their industries. By filling in a form, the application compares the input data
              with that of other companies in the region/industry. In addition to the comparison, a machine learning model
              predicts the likelihood of the start-up reaching IPO.
            </p>
          </div>
          <div
            class="container50-2"
          >
            <h2 style="margin-bottom: 10px;">
              Motivations of Project
            </h2>
            <p>
              According to Crunchbase, Global venture capital funding in the first half of 2021 shattered records as
              more than $288 billion was invested worldwide. How are these startups fundraising so much money? Are there
              key metrics in which these startups
            </p>
          </div>
          <div
            class="container50-2"
          >
            <h2 style="margin-bottom: 10px;">
              Statistics of Data
            </h2>
            <table style="width:80%">
              <tr>
                <th>Number of Companies</th>
                <td>30,000</td>
              </tr>
              <tr>
                <th>Period of Collection</th>
                <td>June 2021 to July 2021</td>
              </tr>
              <tr>
                <th>Source</th>
                <td>Crunchbase</td>
              </tr>
              <tr>
                <th>Companies that IPOed</th>
                <td>1021</td>
              </tr>
              <tr>
                <th>Companies that delisted</th>
                <td>721</td>
              </tr>
              <tr>
                <th>Companies that are private</th>
                <td>8472</td>
              </tr>
            </table>
          </div>
        </div>
        <div
          class="container50"
        >
          <div>
            <h2 style="margin-bottom: 10px;">
              Team Members
            </h2>
            <table style="width:80%">
              <tr>
                <th>Team</th>
                <th>Name</th>
              </tr>
              <tr>
                <td>Team Lead</td>
                <td>Huang Ming</td>
              </tr>
              <tr>
                <td>Data Collection</td>
                <td>David and Jamais</td>
              </tr>
              <tr>
                <td>Feature Engineering</td>
                <td>Kexin and David</td>
              </tr>
              <tr>
                <td>Supervised Learning:</td>
                <td>Eram</td>
              </tr>
              <tr>
                <td>Unsupervised Learning</td>
                <td>Daniel</td>
              </tr>
              <tr>
                <td>Visualisation</td>
                <td>Jamais and Kexin</td>
              </tr>
            </table>
          </div>
          <br>
          <div>
            <h2 style="margin-bottom: 10px;">
              FAQ
            </h2>
            <div>
              <b>How do I use the toilet?</b>
              <p>Find one, and go</p>
            </div>
            <div>
              <b>How do I use the toilet?</b>
              <p>Find one, and go</p>
            </div>
            <div>
              <b>How do I use the toilet?</b>
              <p>Find one, and go</p>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  async created() {},

  async mounted() {},

  methods: {},
};
</script>

<style scoped>
.container100 {
  display: block;
  width: 100%;
  overflow: auto;
}

.container50 {
  display: block;
  width: 50%;
  float: left;
}

.container50-2 {
  margin-right: 10%;
  text-align: justify;
  margin-bottom: 5%;
}

.background-container {
  border-radius: 20px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
}
</style>
