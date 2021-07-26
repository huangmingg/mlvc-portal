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
      await postPrediction(form);
      router.push(`predict/report`);
    },
  },
};
</script>

<style scoped></style>
