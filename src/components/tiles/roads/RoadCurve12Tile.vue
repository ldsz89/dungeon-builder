<template>
  <svg
    width="50px"
    height="50px"
  >
    <g>
      <polygon
        stroke="#000000"
        stroke-width="0.1"
        fill="#ffffff"
        points="12,0 36,0 48,21 36,42 12,42 0,21"
      />
      <image
        href="../../../assets/roads/road_curve_12.png"
        height="36"
        width="36"
        x="3"
        y="22"
        transform="scale(0.8)"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class RoadCurve12Tile extends Vue {
}
</script>

<style lang="scss" scoped>
polygon {
  fill: rgb(230, 245, 154);

  &:hover {
    fill: rgba(230, 245, 154, .8);
  }
}

.active {
  background: rgb(100, 180, 225);
}
</style>
