<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <b-form @submit="onSubmit">
        <b-row>
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
              id="input-group-6"
              label="Description:"
              label-for="input-6"
            >
              <b-form-textarea
                id="input-6"
                v-model="form.description"
                :state="descriptionState"
                type="text"
                required
              />
            </b-form-group>

            <b-form-group
              id="input-group-7"
              label="Founded Date:"
              label-for="input-7"
            >
              <b-form-datepicker
                id="input-7"
                v-model="form.foundedAt"
                date
                required
                :state="expireState"
                :min="minDate"
              />
            </b-form-group>

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


export default {
  name: 'PredictPage',
  data() {
    return {
      form: {
        name: '',
        price: '',
        quantity: '',
        unit: 'Carton',
        description: '',
        foundedAt: '',
        category: 'Expiring',
      },
      minDate: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),
      categories: ['Ugly', 'Expiring'],
      units: ['Carton', 'Kg', 'Ml', 'Box', 'Gram', 'Pax'],
    };
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

<style scoped>

</style>
