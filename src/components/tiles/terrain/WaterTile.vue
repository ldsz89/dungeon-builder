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
    </g>
  </svg>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class WaterTile extends Vue {
}
</script>

<style lang="scss" scoped>
polygon {
  fill: rgb(50, 140, 200);

  &:hover {
    fill: #266b99;
  }
}
</style>
