<template>
  <v-col
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
          href="../../../assets/grass.png"
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
          href="../../../assets/forest.png"
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
          href="../../../assets/hills.png"
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
          href="../../../assets/shrubland.png"
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
          href="../../../assets/tropical_seasonal_forest.png"
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
          href="../../../assets/desert.png"
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
  </v-col>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
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
