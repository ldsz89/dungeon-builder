<template>
  <v-col
    sm="8"
    class="paint-options"
  >
    <grass-tile
      :class="{ active: isActivePaint('grass') }"
      @click.native="setPaint('grass')"
    />
    <forest-tile
      :class="{ active: isActivePaint('forest') }"
      @click.native="setPaint('forest')"
    />
    <mountain-tile
      :class="{ active: isActivePaint('mountains') }"
      @click.native="setPaint('mountains')"
    />
    <hills-tile
      :class="{ active: isActivePaint('hills') }"
      @click.native="setPaint('hills')"
    />
    <shrubland-tile
      :class="{ active: isActivePaint('shrubland') }"
      @click.native="setPaint('shrubland')"
    />
    <tropical-forest-tile
      :class="{ active: isActivePaint('tropical-forest') }"
      @click.native="setPaint('tropical-forest')"
    />
    <desert-tile
      :class="{ active: isActivePaint('desert') }"
      @click.native="setPaint('desert')"
    />
    <water-tile
      :class="{ active: isActivePaint('water') }"
      @click.native="setPaint('water')"
    />
  </v-col>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import DesertTile from '@/components/tiles/terrain/DesertTile.vue';
import ForestTile from '@/components/tiles/terrain/ForestTile.vue';
import GrassTile from '@/components/tiles/terrain/GrassTile.vue';
import HillsTile from '@/components/tiles/terrain/HillsTile.vue';
import MountainTile from '@/components/tiles/terrain/MountainTile.vue';
import ShrublandTile from '@/components/tiles/terrain/ShrublandTile.vue';
import TropicalForestTile from '@/components/tiles/terrain/TropicalForestTile.vue';
import WaterTile from '@/components/tiles/terrain/WaterTile.vue';

@Component({
  components: {
    DesertTile,
    ForestTile,
    GrassTile,
    HillsTile,
    MountainTile,
    ShrublandTile,
    TropicalForestTile,
    WaterTile,
  },
})
export default class PaintTerrain extends Vue {
  @Prop() paint!: string;
  @Prop() setPaint!: any;

  isActivePaint(paint: string) {
    return this.paint === paint;
  }
}
</script>

<style lang="scss" scoped>
.paint-options {
  svg {
    cursor: pointer;

    &.active {
      background: rgb(100, 180, 225);
    }
  }
}

.grass {
  fill: rgb(230, 245, 154);

  &:hover {
    fill: rgba(230, 245, 154, .8);
  }
}

.forest {
  fill: rgb(120, 170, 70);

  &:hover {
    fill: rgba(120, 170, 70, .8);
  }
}

.shrubland {
  fill: rgb(225, 200, 89);

  &:hover {
    fill: rgba(225, 200, 89, .8);
  }
}

.hills {
  fill: rgb(225, 200, 89);

  &:hover {
    fill: rgba(225, 200, 89, .8);
  }
}

.mountains {
  fill: rgb(179, 125, 26);

  &:hover {
    fill: rgba(179, 125, 26, .8);
  }
}

.tropical-forest {
  fill: rgb(84, 157, 101);

  &:hover {
    fill: #468355;
  }
}

.desert {
  fill: rgb(242, 205, 99);

  &:hover {
    fill: rgba(242, 205, 99, .8);
  }
}

.water {
  fill: rgb(50, 140, 200);

  &:hover {
    fill: #266b99;
  }
}
</style>
