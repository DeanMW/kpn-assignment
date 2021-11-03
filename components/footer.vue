<template>
  <div>{{ footer }}</div>
</template>
<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup () {
    const footer = 'footer';

    return { footer };
  }
});
</script>
