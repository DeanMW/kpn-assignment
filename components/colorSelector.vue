<template>
  <div class="color-selectors">
    <ul class="color-selectors__list">
      <li
        v-for="(color, index) in colors"
        :key="color.name"
        class="color-selectors__item"
        :class="{'color-selectors__item--selected': color.isSelected}"
        :style="`background-color: ${color.code}`"
        @click="setSelected(index)"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { mdiArrowRightDropCircle, mdiChevronRight } from '@mdi/js';
import {
  defineComponent,
  ref
} from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    availabelColors: {
      type: Array,
      default: () => [
        { code: '#215E7B', name: 'Blue', isSelected: false },
        { code: '#F9DED7', name: 'Pink', isSelected: true },
        { code: '#161D24', name: 'Midnight', isSelected: false }
      ]
    }
  },
  setup (props) {
    const colors = ref<any>(props.availabelColors);
    const setSelected = (index: number) => {
      colors.value.forEach((_:null, index: any) => { colors.value[index].isSelected = false; });
      colors.value[index].isSelected = true;
    };

    return {
      colors,
      setSelected,
      icons: {
        mdiArrowRightDropCircle,
        mdiChevronRight
      }
    };
  }
});

</script>
<style lang="scss">
    .color-selectors {
      position: absolute;
      right: 16px;
      top: 16px;
      z-index: 1;

      &__list {
        list-style: none;
      }

      &__item {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-bottom: 10px;
        border: 1px solid white;

        &--selected::before {
          content: "";
          border-radius: 100%;
          margin: -3px;
          width: 29px;
          height: 29px;
          position: absolute;
          float: left;
          border: 2px solid #090;
        }
      }
    }
</style>
