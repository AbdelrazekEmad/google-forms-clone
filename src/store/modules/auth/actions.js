import router from "../../../router/index";

export default {
  async login(context, payload) {
    const response = await fetch("https://ktorrviyvwyrxedybheg.supabase.co/auth/v1/token?grant_type=password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
      },

      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      useToast().error(responseData.error_description || "failed to Login, please try again later");
    } else {
      context.commit("setUser", {
        token: responseData.access_token,
        userId: responseData.user.id,
        tokenExpiration: responseData.expires_in,
      });
      router.replace(payload.nextRoute);
    }
  },

  async signup(context, payload) {
    const response = await fetch("https://ktorrviyvwyrxedybheg.supabase.co/auth/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      useToast().error(responseData.error_description || "failed to Login, please try again later");
    } else {
      context.commit("setUser", {
        token: responseData.access_token,
        userId: responseData.user.id,
        tokenExpiration: responseData.expires_in,
      });
      router.replace(payload.nextRoute);
    }
  },

  logout(context) {
    context.commit("setUser", {
      userId: null,
      token: null,
      tokenExpiration: null,
    });
  },
};
