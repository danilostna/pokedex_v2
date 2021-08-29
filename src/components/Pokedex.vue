<template>
  <div class="pokedex">
    <TopPanel />
    <LeftPanel class="pokedex--left"/>
    <Divider />
    <RightPanel class="pokedex--right"/>
  </div>
</template>

<script>
import TopPanel from './topPanel/TopPanel.vue';
import LeftPanel from './leftPanel/LeftPanel.vue';
import Divider from './divider/Divider.vue';
import RightPanel from './rightPanel/RightPanel.vue';

export default {
  name: 'Pokedex',
  components: {
    TopPanel,
    LeftPanel,
    Divider,
    RightPanel,
  },
}
</script>

<style lang="scss" scoped>
  .pokedex {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    height: 100%;

    @media (min-width: $viewport-medium) {
      max-height: 700px;
      flex-direction: row;
    }

    &--left,
    &--right {
      position: relative;
      display: flex;
      height: 50%;
      perspective: 1700px;
      transform-style: preserve-3d;

      @media (min-width: $viewport-medium) {
        height: 100%;
      }
    }
  }
</style>
