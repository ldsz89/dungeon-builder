<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  }
})
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
