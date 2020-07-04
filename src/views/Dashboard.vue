<template>
  <div>
    <navigation />
    <v-card flat>
      <v-card-title>
        Welcome to your dungeon dashboard {{ userProfile.name }}!
      </v-card-title>
      <v-card-text>
        Currently, you have no dungeons to display.
      </v-card-text>
      <v-card-text>
        <v-btn
          width="200"
          height="100"
          href
          to="/dungeon"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class Dashboard extends Vue {
  get userProfile() {
    return this.$store.state.userProfile;
  }
}
</script>

<style lang="scss" scoped>
</style>
