import router from "../../../router/index";
import { useToast } from "vue-toastification";

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
      useToast().error(responseData.error_description || responseData.msg || "failed to Login, please try again later");
    } else {
      const user = await fetch(`https://ktorrviyvwyrxedybheg.supabase.co/rest/v1/users?user_id=eq.${responseData.user.id}`, {
        method: "GET",
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo`,
        },
      });

      const userData = await user.json();

      if (!user.ok) {
        useToast().error(userData.error_description || userData.msg || "failed to Login, please try again later");
      } else {
        context.commit("setUser", {
          token: responseData.access_token,
          userId: responseData.user.id,
          tokenExpiration: responseData.expires_in,
          userName: userData[0].user_name,
          userEmail: userData[0].user_email,
          userAvatar: userData[0].user_avatar,
        });
        router.replace(payload.nextRoute);
      }
    }
  },

  async signup(context, payload) {
    const signUpAuth = await fetch("https://ktorrviyvwyrxedybheg.supabase.co/auth/v1/signup", {
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

    const signUpAuthData = await signUpAuth.json();

    if (!signUpAuth.ok) {
      useToast().error(signUpAuthData.error_description || signUpAuthData.msg || "failed to Login, please try again later");
    } else {
      const user = await fetch("https://ktorrviyvwyrxedybheg.supabase.co/rest/v1/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b3Jydml5dnd5cnhlZHliaGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTI4MjQsImV4cCI6MjAyMDYyODgyNH0.jO5rxpuMOw6E7GTK9nUeuoMFZnox9c9aN_eTd6qcmSo`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          user_id: signUpAuthData.user.id,
          user_name: payload.name,
          user_email: payload.email,
          user_avatar: null,
        }),
      });

      if (!user.ok) {
        useToast().error(signUpAuthDataUser.error_description || signUpAuthDataUser.msg || "failed to Login, please try again later");
      } else {
        context.commit("setUser", {
          token: signUpAuthData.access_token,
          tokenExpiration: signUpAuthData.expires_in,
          userId: signUpAuthData.user.id,
          userName: payload.name,
          userEmail: payload.email,
        });
        router.replace(payload.nextRoute);
      }
    }
  },

  logout(context) {
    context.commit("setUser", {
      userId: null,
      token: null,
      tokenExpiration: null,
      userName: null,
      userEmail: null,
      userAvatar: null,
    });
    context.commit("forms/setForms", []);
  },
};
