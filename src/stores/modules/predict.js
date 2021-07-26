export default {
  state: {
    prediction: {},
  },
  getters: {
    getPrediction: (state) => {
      return state.prediction;
    },
  },
  mutations: {
    updatePrediction(state, prediction) {
      state.prediction = prediction;
    },
  },
  actions: {
    updatePrediction(context, prediction) {
      context.commit('updatePrediction', prediction);
    },
    clearPrediction(context) {
      context.commit('updatePrediction', {});
    },
  },
};