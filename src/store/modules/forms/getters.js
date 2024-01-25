export default {
  getForms(state) {
    return state.forms;
  },
  getSingleForm: (state) => (formId) => {
    return state.forms.find((form) => form.form_id === formId);
  },
};
