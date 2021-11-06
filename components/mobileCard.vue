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
      <div v-if="hasPromotion" color="#00c300" outlined class="card__special rounded-lg px-4 py-2 mx-4 my-2">
        {{ promotionText }}
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
    <v-img
      v-if="hasSticker"
      height="95"
      contain
      class="card__smartpakker"
      src="https://www.kpn.com/shop/cms/assets/stickers/smartpakker.png"
    />
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
    },
    hasPromotion: {
      type: Boolean,
      default: () => false,
      required: true
    },
    promotionText: {
      type: String,
      default: '',
      required: false
    },
    hasSticker: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup (props) {
    // wont work for the 1 windows phone that exists in the world :(
    const imageSource = props.os === 'IOS' ? '/iphone.svg' : '/android.svg';

    // get default selected color from attributes.color
    // set that in the color selector
    // TODO: Set colors in color selector
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
    // TODO: Positioning of smart pakker
    // when there is no
    &__smartpakker {
      position:absolute;
      bottom: 220px;
      right: 80px;
    }

    &__special {
      width: 100%;
      font-weight: 700;
      font-size: 12px;
      background-color: #00c300;
    }

    &__actions {
      position: absolute;
      bottom: 5px;
      right: 10px;
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
