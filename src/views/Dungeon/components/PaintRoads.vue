<template>
  <v-col
    sm="8"
  >
    <road-1-tile
      :class="{ active: isActivePaint('road_1') }"
      @click.native="setPaint('road_1')"
    />
    <road-2-tile
      :class="{ active: isActivePaint('road_2') }"
      @click.native="setPaint('road_2')"
    />
    <road-3-tile
      :class="{ active: isActivePaint('road_3') }"
      @click.native="setPaint('road_3')"
    />
    <road-curve-1-tile
      :class="{ active: isActivePaint('road_curve_1') }"
      @click.native="setPaint('road_curve_1')"
    />
    <road-curve-2-tile
      :class="{ active: isActivePaint('road_curve_2') }"
      @click.native="setPaint('road_curve_2')"
    />
    <road-curve-3-tile
      :class="{ active: isActivePaint('road_curve_3') }"
      @click.native="setPaint('road_curve_3')"
    />
    <road-curve-4-tile
      :class="{ active: isActivePaint('road_curve_4') }"
      @click.native="setPaint('road_curve_4')"
    />
    <road-curve-5-tile
      :class="{ active: isActivePaint('road_curve_5') }"
      @click.native="setPaint('road_curve_5')"
    />
    <road-curve-6-tile
      :class="{ active: isActivePaint('road_curve_6') }"
      @click.native="setPaint('road_curve_6')"
    />
    <road-curve-7-tile
      :class="{ active: isActivePaint('road_curve_7') }"
      @click.native="setPaint('road_curve_7')"
    />
    <road-curve-8-tile
      :class="{ active: isActivePaint('road_curve_8') }"
      @click.native="setPaint('road_curve_8')"
    />
    <road-curve-9-tile
      :class="{ active: isActivePaint('road_curve_9') }"
      @click.native="setPaint('road_curve_9')"
    />
    <road-curve-10-tile
      :class="{ active: isActivePaint('road_curve_10') }"
      @click.native="setPaint('road_curve_10')"
    />
    <road-curve-11-tile
      :class="{ active: isActivePaint('road_curve_11') }"
      @click.native="setPaint('road_curve_11')"
    />
    <road-curve-12-tile
      :class="{ active: isActivePaint('road_curve_12') }"
      @click.native="setPaint('road_curve_12')"
    />
  </v-col>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Road1Tile from '@/components/tiles/roads/Road1Tile.vue';
import Road2Tile from '@/components/tiles/roads/Road2Tile.vue';
import Road3Tile from '@/components/tiles/roads/Road3Tile.vue';
import RoadCurve1Tile from '@/components/tiles/roads/RoadCurve1Tile.vue';
import RoadCurve2Tile from '@/components/tiles/roads/RoadCurve2Tile.vue';
import RoadCurve3Tile from '@/components/tiles/roads/RoadCurve3Tile.vue';
import RoadCurve4Tile from '@/components/tiles/roads/RoadCurve4Tile.vue';
import RoadCurve5Tile from '@/components/tiles/roads/RoadCurve5Tile.vue';
import RoadCurve6Tile from '@/components/tiles/roads/RoadCurve6Tile.vue';
import RoadCurve7Tile from '@/components/tiles/roads/RoadCurve7Tile.vue';
import RoadCurve8Tile from '@/components/tiles/roads/RoadCurve8Tile.vue';
import RoadCurve9Tile from '@/components/tiles/roads/RoadCurve9Tile.vue';
import RoadCurve10Tile from '@/components/tiles/roads/RoadCurve10Tile.vue';
import RoadCurve11Tile from '@/components/tiles/roads/RoadCurve11Tile.vue';
import RoadCurve12Tile from '@/components/tiles/roads/RoadCurve12Tile.vue';

@Component({
  components: {
    Road1Tile,
    Road2Tile,
    Road3Tile,
    RoadCurve1Tile,
    RoadCurve2Tile,
    RoadCurve3Tile,
    RoadCurve4Tile,
    RoadCurve5Tile,
    RoadCurve6Tile,
    RoadCurve7Tile,
    RoadCurve8Tile,
    RoadCurve9Tile,
    RoadCurve10Tile,
    RoadCurve11Tile,
    RoadCurve12Tile,
  },
})
export default class PaintRoads extends Vue {
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
</style>
