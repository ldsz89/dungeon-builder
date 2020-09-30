<template>
  <v-col
    sm="8"
  >
    <blacksmith-tile
      :class="{ active: isActivePaint('blacksmith') }"
      @click.native="setPaint('blacksmith')"
    />
    <cave-tile
      :class="{ active: isActivePaint('cave') }"
      @click.native="setPaint('cave')"
    />
    <city-tile
      :class="{ active: isActivePaint('city') }"
      @click.native="setPaint('city')"
    />
    <docks-tile
      :class="{ active: isActivePaint('docks') }"
      @click.native="setPaint('docks')"
    />
    <farm-tile
      :class="{ active: isActivePaint('farm') }"
      @click.native="setPaint('farm')"
    />
    <fort-tile
      :class="{ active: isActivePaint('fort') }"
      @click.native="setPaint('fort')"
    />
    <fortress-tile
      :class="{ active: isActivePaint('fortress') }"
      @click.native="setPaint('fortress')"
    />
    <gate-tile
      :class="{ active: isActivePaint('gate') }"
      @click.native="setPaint('gate')"
    />
    <graveyard-tile
      :class="{ active: isActivePaint('graveyard') }"
      @click.native="setPaint('graveyard')"
    />
    <hunter-tile
      :class="{ active: isActivePaint('hunter') }"
      @click.native="setPaint('hunter')"
    />
    <inn-tile
      :class="{ active: isActivePaint('inn') }"
      @click.native="setPaint('inn')"
    />
    <jailhouse-tile
      :class="{ active: isActivePaint('jailhouse') }"
      @click.native="setPaint('jailhouse')"
    />
    <maze-tile
      :class="{ active: isActivePaint('maze') }"
      @click.native="setPaint('maze')"
    />
    <obelisk-tile
      :class="{ active: isActivePaint('obelisk') }"
      @click.native="setPaint('obelisk')"
    />
    <old-bridge-tile
      :class="{ active: isActivePaint('old-bridge') }"
      @click.native="setPaint('old-bridge')"
    />
    <roadsign-tile
      :class="{ active: isActivePaint('roadsign') }"
      @click.native="setPaint('roadsign')"
    />
    <ruins-tile
      :class="{ active: isActivePaint('ruins') }"
      @click.native="setPaint('ruins')"
    />
    <shipwreck-tile
      :class="{ active: isActivePaint('shipwreck') }"
      @click.native="setPaint('shipwreck')"
    />
    <stables-tile
      :class="{ active: isActivePaint('stables') }"
      @click.native="setPaint('stables')"
    />
    <stone-bridge-left-tile
      :class="{ active: isActivePaint('stone-bridge-left') }"
      @click.native="setPaint('stone-bridge-left')"
    />
    <stone-bridge-right-tile
      :class="{ active: isActivePaint('stone-bridge-right') }"
      @click.native="setPaint('stone-bridge-right')"
    />
    <tavern-tile
      :class="{ active: isActivePaint('tavern') }"
      @click.native="setPaint('tavern')"
    />
    <tower-tile
      :class="{ active: isActivePaint('tower') }"
      @click.native="setPaint('tower')"
    />
    <townhall-tile
      :class="{ active: isActivePaint('townhall') }"
      @click.native="setPaint('townhall')"
    />
    <university-tile
      :class="{ active: isActivePaint('university') }"
      @click.native="setPaint('university')"
    />
    <village-tile
      :class="{ active: isActivePaint('village') }"
      @click.native="setPaint('village')"
    />
    <warehouse-tile
      :class="{ active: isActivePaint('warehouse') }"
      @click.native="setPaint('warehouse')"
    />
    <watchtower-tile
      :class="{ active: isActivePaint('watchtower') }"
      @click.native="setPaint('watchtower')"
    />
    <windmill-tile
      :class="{ active: isActivePaint('windmill') }"
      @click.native="setPaint('windmill')"
    />
    <wooden-bridge-tile
      :class="{ active: isActivePaint('wooden-bridge') }"
      @click.native="setPaint('wooden-bridge')"
    />
  </v-col>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import BlacksmithTile from '@/components/tiles/BlacksmithTile.vue';
import CaveTile from '@/components/tiles/CaveTile.vue';
import CityTile from '@/components/tiles/CityTile.vue';
import DocksTile from '@/components/tiles/DocksTile.vue';
import FarmTile from '@/components/tiles/FarmTile.vue';
import FortTile from '@/components/tiles/FortTile.vue';
import FortressTile from '@/components/tiles/FortressTile.vue';
import GateTile from '@/components/tiles/GateTile.vue';
import GraveyardTile from '@/components/tiles/GraveyardTile.vue';
import HunterTile from '@/components/tiles/HunterTile.vue';
import InnTile from '@/components/tiles/InnTile.vue';
import JailhouseTile from '@/components/tiles/JailhouseTile.vue';
import MazeTile from '@/components/tiles/MazeTile.vue';
import ObeliskTile from '@/components/tiles/ObeliskTile.vue';
import OldBridgeTile from '@/components/tiles/OldBridgeTile.vue';
import RoadsignTile from '@/components/tiles/RoadsignTile.vue';
import RuinsTile from '@/components/tiles/RuinsTile.vue';
import ShipwreckTile from '@/components/tiles/ShipwreckTile.vue';
import StablesTile from '@/components/tiles/StablesTile.vue';
import StatueTile from '@/components/tiles/StatueTile.vue';
import StoneBridgeLeftTile from '@/components/tiles/StoneBridgeLeftTile.vue';
import StoneBridgeRightTile from '@/components/tiles/StoneBridgeRightTile.vue';
import TavernTile from '@/components/tiles/TavernTile.vue';
import TowerTile from '@/components/tiles/TowerTile.vue';
import TownhallTile from '@/components/tiles/TownhallTile.vue';
import UniversityTile from '@/components/tiles/UniversityTile.vue';
import VillageTile from '@/components/tiles/VillageTile.vue';
import WarehouseTile from '@/components/tiles/WarehouseTile.vue';
import WatchtowerTile from '@/components/tiles/WatchtowerTile.vue';
import WindmillTile from '@/components/tiles/WindmillTile.vue';
import WoodenBridgeTile from '@/components/tiles/WoodenBridgeTile.vue';

@Component({
  components: {
    BlacksmithTile,
    CaveTile,
    CityTile,
    DocksTile,
    FarmTile,
    FortTile,
    FortressTile,
    GateTile,
    GraveyardTile,
    HunterTile,
    InnTile,
    JailhouseTile,
    MazeTile,
    ObeliskTile,
    OldBridgeTile,
    RoadsignTile,
    RuinsTile,
    ShipwreckTile,
    StablesTile,
    StatueTile,
    StoneBridgeLeftTile,
    StoneBridgeRightTile,
    TavernTile,
    TowerTile,
    TownhallTile,
    UniversityTile,
    VillageTile,
    WarehouseTile,
    WatchtowerTile,
    WindmillTile,
    WoodenBridgeTile,
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
