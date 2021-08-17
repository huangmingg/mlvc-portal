<template>
  <div>
    <b-container
      fluid
      class="p-4 bg-light"
    >
      <Form 
        @submitPrediction="submitPrediction"
      />
    </b-container>
  </div>
</template>

<script>

import { router } from '@/routes';
import { postPrediction } from '@/services/predict.service';
import Form from '@/components/Form';

export default {
  name: 'PredictPage',
  components: {
    Form,
  },
  methods: {
    async submitPrediction(form) {
      const resp = await postPrediction(form);
      console.log(resp);
      router.push({
        name: 'report',
        params: { response: resp },
      });
    },
  },
};
</script>

<style scoped></style>
