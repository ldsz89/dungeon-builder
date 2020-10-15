<template>
  <div id="worldmap-grid">
    <svg
      v-if="mapCells.length"
      width="100%"
      :height="svgHeight"
      class="svg-map"
    >
      <g
        v-for="(row, indexY) in mapCells"
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
          :class="cellClass(cell.type)"
          @click="changeCellType(cell)"
        />
        <g
          v-for="(cell, indexX) in row"
          :key="`x-image-${indexX}`"
        >
          <image
            v-if="cell.type !== 'water'"
            :href="getImageUrl(cell.type)"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          />
          <!-- <image
            v-if="cell.type == 'road_1'"
            href="../../../assets/roads/road_1.png"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          />
          <image
            v-if="cell.type == 'road_2'"
            href="../../../assets/roads/road_2.png"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          />
          <image
            v-if="cell.type == 'road_3'"
            href="../../../assets/roads/road_3.png"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          />
          <image
            v-if="cell.type == 'road_curve_1'"
            href="../../../assets/roads/road_curve_1.png"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          />
          <image
            v-if="cell.type == 'road_curve_2'"
            href="../../../assets/roads/road_curve_2.png"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          />
          <image
            v-if="cell.type == 'road_curve_3'"
            href="../../../assets/roads/road_curve_3.png"
            height="36"
            width="36"
            x="6"
            y="2"
            :transform="cellTranslation(indexX, indexY)"
            @click="changeCellType(cell)"
          /> -->
        </g>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

interface MapCell {
  type: string;
  image: string;
  cellIndex: number;
}

@Component
export default class Grid extends Vue {
  @Prop() paint!: string;
  @Prop() mapCells!: MapCell[][];

  terrainOptions = ['grass', 'forest', 'mountains', 'hills', 'shrubland', 'tropical-forest', 'desert', 'water'];
  landmarkOptions = ['blacksmith', 'cave', 'city', 'docks', 'farm', 'fort', 'fortress', 'gate', 'graveyard', 'hunter',
    'inn', 'jailhouse', 'maze', 'obelisk', 'old-bridge', 'roadsign', 'ruins', 'shipwreck', 'stables',
    'stone-bridge-left', 'stone-bridge-right', 'tavern', 'tower', 'townhall', 'university', 'village', 'warehouse',
    'watchtower', 'windmill', 'wooden-bridge'];
  roadOptions = ['road_1', 'road_2', 'road_3', 'road_curve_1', 'road_curve_2', 'road_curve_3', 'road_curve_4',
    'road_curve_5', 'road_curve_6', 'road_curve_7', 'road_curve_8', 'road_curve_9', 'road_curve_10', 'road_curve_11',
    'road_curve_12'];

  get svgHeight() {
    return `${45 * this.mapCells.length}px`;
  }

  getImageUrl(cellType: string) {
    let images;
    if (this.terrainOptions.includes(cellType)) {
      images = require.context('@/assets/terrain/', false, /\.png$/);
    } else if (this.roadOptions.includes(cellType)) {
      images = require.context('@/assets/roads/', false, /\.png$/);
    } else if (this.landmarkOptions.includes(cellType)) {
      console.log('landmark option:', cellType);
      images = require.context('@/assets/landmarks/', false, /\.png$/);
    } else {
      images = require.context('@/assets/terrain/', false, /\.png$/);
    }
    return images('./' + cellType + '.png');
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
    console.log('#cell type:', cell.type);
    cell.image = '../../../assets/';
    if (this.terrainOptions.includes(cell.type)) {
      cell.image += `terrain/${this.paint}.png`;
    } if (this.roadOptions.includes(cell.type)) {
      cell.image += `roads/${this.paint}.png`;
    } if (this.landmarkOptions.includes(cell.type)) {
      cell.image += `landmark/${this.paint}.png`;
    }
  }

  cellClass(cellType: string): string {
    if (this.terrainOptions.includes(cellType)) {
      return cellType;
    } if (this.roadOptions.includes(cellType)) {
      return 'road';
    } if (this.landmarkOptions.includes(cellType)) {
      return 'landmark';
    } else {
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
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

.landmark {
  fill: #9c9c9c;
}
</style>
