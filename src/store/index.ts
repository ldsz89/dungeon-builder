import Vue from 'vue';
import Vuex from 'vuex';
import fb from '@/firebaseConfig';
import router from '@/router/index';

Vue.use(Vuex);

const currentUser: any | null = null;

export const store = new Vuex.Store({
  state: {
    currentUser,
    userProfile: {
      name: '',
    },
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    async signup({dispatch}, form) {
      const user = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);
      await fb.usersCollection.doc(user.user?.uid).set({
        name: form.name,
      });
      dispatch('fetchUserProfile', user);
    },
    async login({dispatch}, form) {
      const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password);

      dispatch('fetchUserProfile', user);
    },
    async logout({commit}) {
      await fb.auth.signOut();
      commit('setUserProfile', {});
      router.push('/login');
    },
    async fetchUserProfile({commit}, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      // console.log('#fetchUserProfile: userProfile: ', userProfile);
      commit('setUserProfile', userProfile.data());
      router.push('/');
    },
  },
  modules: {
  },
});
