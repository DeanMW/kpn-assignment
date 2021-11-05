import { MutationTree } from 'vuex/types';
import { Devices, Product } from '~/types/devices';

const mutations: MutationTree<Devices> = {
  setDevices (state, payload: {products: Product[], filteredProducts: Product[]}) {
    state.products = payload.products;
    state.filteredProducts = payload.filteredProducts ?? payload.products;
  }
};

export default mutations;
