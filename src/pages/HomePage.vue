<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <div class="container100">
        <div class="container50">
          <div>
            <h2 style="margin-bottom: 10px;">
              About Project
            </h2>
            <p>
              The MLVC project aims to provide insight into the Startup & Venture Capital industry<br>
              ++what the application does
            </p>
          </div>
          <br>
          <div>
            <h2 style="margin-bottom: 10px;">
              Motivations of Project
            </h2>
            <p>Something</p>
          </div>
          <br>
          <div>
            <h2 style="margin-bottom: 10px;">
              Statistics of Data
            </h2>
            <p>Something</p>
          </div>
        </div>
        <div class="container50">
          <div>
            <h2 style="margin-bottom: 10px;">
              Team Members
            </h2>
            <p>
              <b>Team Lead:</b> Huang Ming<br>
              <b>Data:</b> David and Jamais<br>
              <b>Feature Engineering:</b> Kexin and David<br>
              <b>Supervised Learning:</b> Eram<br>
              <b>Unsupervised Learning:</b> Daniel<br>
              <b>Visualisation:</b> Jamais and Kexin
            </p>
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

  async created() {
  },

  async mounted() {
  },

  methods: {
  },
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

</style>
