export default {
  setForms(state, payload) {
    state.forms = payload;
  },
  addQuetion(state, payload) {
    state.forms.find((form) => form.form_id === payload.formId)?.form_inputs?.push(payload.newIndpust);
  },
  addHeader(state, payload) {
    state.forms.find((form) => form.form_id === payload.formId)?.form_inputs?.push(payload.newIndpust);
  },
};
