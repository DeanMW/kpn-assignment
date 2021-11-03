<template>
  <div class="header">
    <div class="header__top-bar align-items-center">
      <div class="header__top-bar__content">
        <img
          src="https://www.kpn.com/shop/cms/assets/logo/logo.svg"
          alt="kpn logo"
          height="40px"
        >
        <div class="header__top-bar__icons">
          <!-- TODO: replace with correct icons -->
          <span><i class="icofont-ui-user" /> MijnKPN</span>
          <span><i class="icofont-basket" /></span>
          <span><i class="icofont-envelope" /></span>
          <span><i class="icofont-search-2" /></span>
        </div>
      </div>
    </div>
    <div class="header__bottom-bar align-items-center">
      <ul class="header__menu">
        <li>Shop</li>
        <li>Telefoons</li>
        <li>Sim Only</li>
        <li>Verlengen</li>
        <li>Kids Sim</li>
        <li>Mobiel Internet</li>
        <li>Accessoires</li>
        <li>Tablets & MiFi</li>
        <li>Prepaid</li>
        <li>iPhone 13</li>
        <li>Samsung S21</li>
      </ul>
    </div>
  </div>
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
<style lang="scss" scoped>
.header {
    padding-top: 30px;
    background-color: #f3f3f3;
    width: 100vw;

    &__top-bar {
        padding: 10px;
        background-color: #fff;
        border-bottom: solid 2px #ddd;

        &__content {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
            margin: 0 auto;
        }

        &__icons span i {
            padding: 0 20px;
            font-size: 20px
        }
    }

    &__bottom-bar {
        background-color: #fff;
    }

    .align-items-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__menu {
        margin: 0;
        padding: 0;

        li {
            display: inline-block;
            margin: 0 16px;
            padding: 0 0 10px 0;
        }

        li:hover {
            color: #090;
        }

        li:before {
            display: block;
            content: "";
            border-top: solid 3px #090;
            transform: scaleX(0.0001);
            transition: transform 250ms ease-in-out;
            padding: 5px;
        }

        li:hover:before {
            transform: scaleX(1);
        }
    }
}
</style>
