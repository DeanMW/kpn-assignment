<template>
  <v-card
    outlined
    class="rounded-lg pa-5 d-flex"
  >
    <multi-selector id="brand" name="Merk" :options="options" />
    <multi-selector id="color" name="Kleur" :options="options" />
    <multi-selector id="network" name="5G" :options="options" />
    <multi-selector id="os" name="Besturingssysteem" :options="options" />
    <multi-selector id="esim" name="E-sim" :options="options" />
    <multi-selector id="condition" name="Refurbished" :options="options" />
    <multi-selector id="condition" class="ml-auto" name="Refurbished" :options="options" label="Sortered op:" />
  </v-card>
</template>
<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({
  data () {
    return {
      value: [],
      options: [
        {
          value: 'Alabama',
          name: 'Alabama'
        }
      ]
    };
  }
});
</script>
