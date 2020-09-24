<template>
  <div>
    <navigation />
    <v-card flat>
      <v-row>
        <v-col
          sm="4"
        >
          <v-text-field
            v-model="worldmap.name"
            outlined
            label="Map Name"
          />
        </v-col>
        <v-col
          sm="2"
          md="2"
        >
          <v-text-field
            v-model="worldmap.sizeY"
            outlined
            label="Rows"
            type="number"
            disabled
          />
        </v-col>
        <v-col
          sm="2"
        >
          <v-text-field
            v-model="worldmap.sizeX"
            outlined
            label="Columns"
            type="number"
            disabled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          sm="4"
        >
          <v-select
            v-model="mapPaintOption"
            :items="mapPaintOptions"
            outlined
            label="Map Paints"
          />
        </v-col>
        <paint-terrain
          v-if="mapPaintOption === 'Terrain'"
          :paint="paint"
          :set-paint="setPaint"
        />
        <paint-landmarks
          v-if="mapPaintOption === 'Landmarks'"
          :paint="paint"
          :set-paint="setPaint"
        />
        <!-- <v-col
          v-if="mapPaintOption === 'Terrain'"
          sm="8"
          class="paint-options"
        >
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('grass') }"
            @click="setPaint('grass')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="grass"
              />
              <image
                href="../../assets/grass.png"
                height="36"
                width="36"
                x="6"
                y="2"
                transform="scale(1)"
              />
            </g>
          </svg>
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('forest') }"
            @click="setPaint('forest')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="forest"
              />
              <image
                href="../../assets/forest.png"
                height="36"
                width="36"
                x="6"
                y="2"
                transform="scale(1)"
              />
            </g>
          </svg>
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('hills') }"
            @click="setPaint('hills')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="hills"
              />
              <image
                href="../../assets/hills.png"
                height="36"
                width="36"
                x="6"
                y="2"
                transform="scale(1)"
              />
            </g>
          </svg>
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('shrubland') }"
            @click="setPaint('shrubland')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="shrubland"
              />
              <image
                href="../../assets/shrubland.png"
                height="36"
                width="36"
                x="6"
                y="2"
                transform="scale(1)"
              />
            </g>
          </svg>
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('tropical-forest') }"
            @click="setPaint('tropical-forest')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="tropical-forest"
              />
              <image
                href="../../assets/tropical_seasonal_forest.png"
                height="36"
                width="36"
                x="6"
                y="2"
                transform="scale(1)"
              />
            </g>
          </svg>
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('desert') }"
            @click="setPaint('desert')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="desert"
              />
              <image
                href="../../assets/desert.png"
                height="36"
                width="36"
                x="6"
                y="2"
                transform="scale(1)"
              />
            </g>
          </svg>
          <svg
            width="50px"
            height="50px"
            :class="{ active: isActivePaint('water') }"
            @click="setPaint('water')"
          >
            <g>
              <polygon
                stroke="#000000"
                stroke-width="0.1"
                fill="#ffffff"
                points="12,0 36,0 48,21 36,42 12,42 0,21"
                class="water"
              />
            </g>
          </svg>
        </v-col> -->
      </v-row>
      <div id="worldmap">
        <svg
          v-if="worldmap.mapCells.length"
          width="100%"
          height="2000px"
          class="svg-map"
        >
          <g
            v-for="(row, indexY) in worldmap.mapCells"
            :key="`row-${indexY}`"
          >
            <polygon
              v-for="(cell, indexX) in row"
              :key="`column-${indexX}`"
              stroke="#000000"
              stroke-width="0.1"
              fill="#ffffff"
              points="12,0 36,0 48,21 36,42 12,42 0,21"
              :transform="cellTranslation(indexX, indexY)"
              :class="cell.type"
              @click="changeCellType(cell)"
            />
            <g
              v-for="(cell, indexX) in row"
              :key="`x-image-${indexX}`"
            >
              <image
                v-if="cell.type == 'grass'"
                href="../../assets/grass.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'forest'"
                href="../../assets/forest.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'hills'"
                href="../../assets/hills.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'shrubland'"
                href="../../assets/shrubland.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'tropical-forest'"
                href="../../assets/tropical_seasonal_forest.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'desert'"
                href="../../assets/desert.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'cave'"
                href="../../assets/cave.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
              <image
                v-if="cell.type == 'tower'"
                href="../../assets/tower.png"
                height="36"
                width="36"
                x="6"
                y="2"
                :transform="cellTranslation(indexX, indexY)"
                @click="changeCellType(cell)"
              />
            </g>
          </g>
        </svg>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import PaintTerrain from './components/PaintTerrain.vue';
import PaintLandmarks from './components/PaintLandmarks.vue';

interface WorldMap {
  name: string;
  sizeX: number;
  sizeY: number;
  mapCells: MapCell[][];
}

interface MapCell {
  type: string;
  image: string;
  cellIndex: number;
}

@Component({
  components: {
    Navigation,
    PaintTerrain,
    PaintLandmarks,
  },
})
export default class Dungeon extends Vue {
  worldmap: WorldMap = {
    name: '',
    sizeX: 30,
    sizeY: 30,
    mapCells: [],
  }
  paint = 'grass';
  mapPaintOptions = ['Terrain', 'Landmarks'];
  mapPaintOption = 'Terrain';

  mounted(): any {
    for (let y = 0; y < this.worldmap.sizeY; y++) {
      let row = [];
      for (let x = 0; x < this.worldmap.sizeX; x++) {
        const mapCell: MapCell = {
          type: 'grass',
          image: '@/assets/grass.png',
          cellIndex: x,
        };
        row.push(mapCell);
      }

      this.worldmap.mapCells.push(row);
      row = [];
    }
  }

  setPaint(paint: string) {
    this.paint = paint;
  }

  isActivePaint(paint: string) {
    return this.paint === paint;
  }

  cellTranslation(gridIndexX: number, gridIndexY: number): string {
    const x: number = gridIndexX * 36;
    let y: number;

    if (gridIndexX % 2 === 0) {
      y = gridIndexY * 42;
    } else {
      y = gridIndexY * 42 + 21;
    }

    return `translate(${x}, ${y})`;
  }

  changeCellType(cell: MapCell) {
    cell.type = this.paint;
    cell.image = `@/assets/${this.paint}.png`;
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

.svg-map {
  background: #328cc8;
  cursor: crosshair;
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

.tower {
  fill: #9c9c9c;
}
</style>
