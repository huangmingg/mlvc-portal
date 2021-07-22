export default {
  state: {
    currentCompany: {},  
    companyList: [],
  },
  getters: {
    getCurrentCompany: (state) => {
      return state.currentCompany;
    },
    getCompanyList: (state) => {
      return state.companyList;
    },
  },
  mutations: {
    updateCurrentCompany(state, currentCompany) {
      state.currentCompany = currentCompany;
    },
  
    updateCompanyList(state, companyList) {
      state.companyList = companyList;
    },
  
  },
  actions: {
    updateCurrentCompany(context, currentCompany) {
      context.commit('updateCurrentCompany', currentCompany);
    },
    updateCompanyList(context, companyList) {
      context.commit('updateCompanyList', companyList);
    },
    clearCurrentCompany(context) {
      context.commit('updateCurrentCompany', {});
    },
    clearCompanyList(context) {
      context.commit('updateCompanyList', []);
    },
  },
};