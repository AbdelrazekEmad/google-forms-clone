import router from "../../../router/index";
import { useToast } from "vue-toastification";

export default {
  async getForms(context) {
    const response = await fetch(`https://ktorrviyvwyrxedybheg.supabase.co/rest/v1/forms?owned_by=eq.${context.rootGetters.userIdd}`, {
      method: "GET",
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo`,
      },
    });
    const responseData = await response.json();

    context.commit("setForms", responseData);
  },

  addQuetion(context, payload) {
    context.commit("addQuetion", payload);
  },

  addHeader(context, payload) {
    context.commit("addHeader", payload);
  },

  async sendForm(context, { formId }) {
    const formInputs = context.getters.getSingleForm(formId)?.form_inputs;
    const response = await fetch(`https://ktorrviyvwyrxedybheg.supabase.co/rest/v1/forms?form_id=eq.${formId}`, {
      method: "PATCH",
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        form_inputs: formInputs,
      }),
    });

    useToast().success("Form Saved Successfully");
    router.replace("/forms");
  },

  async AddNewForm(context) {
    const response = await fetch("https://ktorrviyvwyrxedybheg.supabase.co/rest/v1/forms", {
      method: "POST",
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        form_inputs: formInputs,
      }),
    });
  },
};
