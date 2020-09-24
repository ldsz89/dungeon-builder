<template>
  <v-col
    sm="2"
  >
    <cave-tile
      :class="{ active: isActivePaint('cave') }"
      @click.native="setPaint('cave')"
    />
    <tower-tile
      :class="{ active: isActivePaint('tower') }"
      @click.native="setPaint('tower')"
    />
  </v-col>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import CaveTile from '@/components/tiles/CaveTile.vue';
import TowerTile from '@/components/tiles/TowerTile.vue';

@Component({
  components: {
    CaveTile,
    TowerTile,
  },
})
export default class PaintLandmarks extends Vue {
  @Prop() paint!: string;
  @Prop() setPaint!: any;

  isActivePaint(paint: string) {
    return this.paint === paint;
  }
}
</script>

<style lang="scss">
.paint-options {
  svg {
    cursor: pointer;

    &.active {
      background: rgb(100, 180, 225);
    }
  }
}

.cave {
  fill: #9c9c9c;
}
</style>
