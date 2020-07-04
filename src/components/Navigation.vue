<template>
  <v-app-bar
    app
  >
    <v-toolbar-title>
      Dungeon Builder
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      class="mx-1"
      text
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon> Logout
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  logout() {
    this.$store.dispatch('logout');
  }
}
</script>

<style lang="scss" scoped>
</style>
