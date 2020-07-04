<template>
  <div id="login">
    <v-form
      v-if="showLoginForm"
      @submit.prevent="login()"
    >
      <v-card
        :loading="performingRequest"
      >
        <v-card-title>
          Welcome! Please login to continue.
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model.trim="loginForm.email"
            label="Email"
            type="email"
          />
          <v-text-field
            v-model="loginForm.password"
            label="Password"
            type="password"
          />
        </v-card-text>
        <v-card-actions>
          <a @click="showLoginForm = false">
            Create an Account
          </a>
          <v-spacer />
          <v-btn
            class="white--text"
            color="secondary"
            @click="login()"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-form
      v-else
      @submit.prevent="signup()"
    >
      <v-card
        :loading="performingRequest"
      >
        <v-card-title>Welcome!</v-card-title>
        <v-card-subtitle>Please fill in the information below to get started.</v-card-subtitle>
        <v-card-text>
          <v-text-field
            v-model.trim="signupForm.name"
            label="Name"
          />
          <v-text-field
            v-model.trim="signupForm.email"
            type="email"
            label="Email"
          />
          <v-text-field
            v-model="signupForm.password"
            type="password"
            label="Password"
            @keyup.enter="signup"
          />
        </v-card-text>
        <v-card-actions>
          <a @click="showLoginForm = true">
            Already have an account?
          </a>
          <v-spacer />
          <v-btn
            class="white--text"
            color="secondary"
            @click="signup()"
          >
            Signup
          </v-btn>
        </v-card-actions>
        <v-card-text
          v-if="errorMsg"
          class="error white--text"
        >
          {{ errorMsg }}
        </v-card-text>
      </v-card>
    </v-form>
    <v-dialog v-model="togglePasswordReset">
      <v-form
        v-if="!passwordResetSuccess"
        @submit.prevent="resetPassword()"
      >
        <v-card
          :loading="performingRequest"
        >
          <v-card-title>Forgot Password</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="passwordForm.email"
              label="Email"
              type="email"
            />
          </v-card-text>
          <v-card-action>
            <v-spacer />
            <v-btn
              @click="resetPassword()"
            >
              Reset
            </v-btn>
          </v-card-action>
        </v-card>
      </v-form>
      <transition name="fade">
        <div v-if="errorMsg != ''">
          <p>{{ errorMsg }}</p>
        </div>
      </transition>
      <v-card>
        <v-card-title>Email Sent</v-card-title>
        <v-card-text>Check your email for a link to reset your password.</v-card-text>
        <v-card-action>
          <v-spacer />
          <v-btn
            @click="togglePasswordReset = false"
          >
            Back to login
          </v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import fb from '@/firebaseConfig';

@Component
export default class Login extends Vue {
  showLoginForm = true;
  togglePasswordReset = false;
  passwordResetSuccess = false
  performingRequest = false;
  errorMsg = '';
  loginForm = {
    email: '',
    password: '',
  };
  signupForm = {
    name: 'Dre',
    email: 'blacknblue14@gmail.com',
    password: 'Finem2014',
  };
  passwordForm = {
    email: '',
  };

  login() {
    this.$store.dispatch('login', {
      email: this.loginForm.email,
      password: this.loginForm.password,
    });
  }

  signup() {
    if (this.signupForm.name && this.signupForm.email && this.signupForm.password) {
      this.performingRequest = true;

      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
      });
    } else {
      this.errorMsg = 'Please fill in name, email, and password to create an account.\n';
    }
  }

  resetPassword() {
    this.performingRequest = true;

    fb.auth.sendPasswordResetEmail(this.passwordForm.email)
      .then(() => {
        this.performingRequest = false;
        this.passwordResetSuccess = true;
        this.passwordForm.email = '';
      })
      .catch((err) => {
        console.log(err);
        this.performingRequest = false;
        this.errorMsg = err.message;
      });
  }
}
</script>

<style lang="scss" scoped>
</style>
