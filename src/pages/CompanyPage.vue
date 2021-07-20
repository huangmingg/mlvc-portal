<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <b-table
        sticky-header
        hover
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
      />
    </b-container>
    <b-col>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        class="my-0"
      />
    </b-col>
  </div>
</template>

<script>

export default {
  name: 'CompanyPage',
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'last_name',
          sortable: true,
        },
        {
          key: 'first_name',
          sortable: false,
        },
        {
          key: 'age',
          label: 'Person age',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
      ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: 'Show a lot' }],
      totalRows: 1,
    };
  },
  async created() {
  },

  async mounted() {
  },

  methods: {
  },
};
</script>

<style scoped>

</style>
