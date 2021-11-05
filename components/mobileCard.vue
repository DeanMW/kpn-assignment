<template>
  <v-card
    outlined
    class="rounded-lg pa-4"
    height="390"
  >
    <v-row justify="center">
      <v-img
        contain
        height="240"
        max-width="200"
        :src="imageSource"
      />
    </v-row>
    <color-selector />
    <v-row>
      <v-card-text class="py-0">
        {{ brand }}
      </v-card-text>

      <v-card-title class="py-0">
        {{ model }}
      </v-card-title>
    </v-row>
    <v-row>
      <div color="#00c300" outlined class="card__special rounded-lg px-4 py-2 mx-4 my-2">
        <!-- {{ promotion }}  -->
        PROMOTION GOES HERE variant[selected].promotion
      </div>
    </v-row>
    <v-card-actions class="card__actions ma-0 px-0">
      <v-btn
        v-ripple="false"
        color="#07c"
        text
      >
        Bekijk toestel
        <div class="card__icon ml-1">
          <v-icon size="30" color="white">
            {{ icons.mdiChevronRight }}
          </v-icon>
        </div>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { mdiArrowRightDropCircle, mdiChevronRight } from '@mdi/js';
import {
  defineComponent
} from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    brand: {
      type: String,
      default: '',
      required: true
    },
    model: {
      type: String,
      default: '',
      required: true
    },
    os: {
      type: String,
      default: '',
      required: true
    },
    defaultSelection: {
      type: String,
      default: '',
      required: true
    }
  },
  setup (props) {
    // wont work for the 1 windows phone that exists in the world :(
    const imageSource = props.os === 'IOS' ? '/iphone.svg' : '/android.svg';

    // work out which one is selected by default
    // set that in the colorSelector
    // send through colors to colorSelector

    return {
      imageSource,
      icons: {
        mdiArrowRightDropCircle,
        mdiChevronRight
      }
    };
  }
});

</script>
<style lang="scss">
  .v-btn {
    // attempt to remove button background color
    // TODO: figure out why its flashing?
    &:hover:before,
    &:focus:before {
      color: transparent;
    }

    &:not(:hover) {
      color: black;
    }
  }

  .card {
    &__special {
      width: 100%;
      font-weight: 700;
      font-size: 12px;
      background-color: #00c300;
    }

    &__actions {
      justify-content: end;
    }

    &__icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background-color: #07c;
  }
  }
</style>
