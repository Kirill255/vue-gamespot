<template>
  <div class="container">
    <div class="signin_container">

      <h1>Sign in</h1>
      <form @submit.prevent="onSubmit">

        <div
          class="input_field"
          :class="{invalid: $v.formdata.email.$error}"
        >
          <label>Email</label>
          <input
            type="email"
            @blur="$v.formdata.email.$touch()"
            v-model.trim="formdata.email"
          >
          <div v-if="$v.formdata.email.$error">
            <p
              v-if="!$v.formdata.email.required"
              class="error_label"
            >
              This field is required
            </p>
            <p
              v-if="!$v.formdata.email.email"
              class="error_label"
            >
              Please enter a valid email
            </p>
          </div>
        </div>

        <div
          class="input_field"
          :class="{invalid: $v.formdata.password.$error}"
        >
          <label>Password</label>
          <input
            type="password"
            @blur="$v.formdata.password.$touch()"
            v-model.trim="formdata.password"
          >
          <div v-if="$v.formdata.password.$error">
            <p
              v-if="!$v.formdata.password.required"
              class="error_label"
            >
              This field is required
            </p>
            <p
              v-if="!$v.formdata.password.minLength"
              class="error_label"
            >
              At least 6 characters
            </p>

          </div>
        </div>

        <button type="submit">
          Sign in
        </button>

        <p
          v-if="error"
          class="error_label"
        >
          Something is wrong
        </p>

        <p
          v-if="authFailed"
          class="error_label"
        >
          Please check your email and password
        </p>

      </form>

    </div>
  </div>
</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      error: false,
      formdata: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    formdata: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    authFailed() {
      return this.$store.state.admin.authFailed;
    }
  },
  methods: {
    onSubmit() {
      if (!this.$v.$invalid) {
        this.$store.dispatch("admin/signIn", this.formdata);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    }
  },
  destroyed() {
    this.$store.commit("admin/authFailed", "reset");
  }
};
</script>

<style scoped>
.input_field.invalid input,
.input_field.invalid select {
  border: 1px solid red;
}
</style>
