<template>
  <div class="filter__container">
    <div>
      <selector id="brand" name="Merk" :options="options" />
      <selector id="color" name="Kleur" :options="options" />
      <selector id="network" name="5G" :options="options" />
      <selector id="os" name="Besturingssysteem" :options="options" />
      <selector id="esim" name="E-sim" :options="options" />
      <selector id="condition" name="Refurbished" :options="options" />
    </div>
    <div>
      <selector id="condition" name="Refurbished" :options="options" label="Sortered op:" />
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup () {
    const filter = 'filter';
    const options = [{ name: 'test', value: 'test' }, { name: 'test', value: 'test' }, { name: 'test', value: 'test' }, { name: 'test', value: 'test' }];

    return { filter, options };
  }
});
</script>
<style lang="scss" scoped>
.filter {
  &__container {
    display: grid;
    align-items: center;
    padding: 16px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    height: 40px;
  }
}
</style>
