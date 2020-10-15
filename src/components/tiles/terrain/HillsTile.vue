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
        href="../../../assets/terrain/hills.png"
        height="36"
        width="36"
        x="6"
        y="2"
        transform="scale(1)"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class HillsTile extends Vue {
}
</script>

<style lang="scss" scoped>
polygon {
  fill: rgb(225, 200, 89);

  &:hover {
    fill: rgba(225, 200, 89, .8);
  }
}

.active {
  background: rgb(100, 180, 225);
}
</style>
