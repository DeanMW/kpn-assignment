import { MutationTree } from 'vuex/types';
import { Devices, Filters, Product } from '~/types/devices';

type filterItem = {
  id: keyof Filters;
  name: string;
  count: number | undefined;
}

const mutations: MutationTree<Devices> = {
  setDevices (state, payload: {products: Product[], filteredProducts: Product[]}) {
    state.products = payload.products;
    state.filteredProducts = payload.products;
  },
  setFilteredOptions (state: Devices, payload: filterItem) {
    const { filteredOptions, products } = state;
    const { id, name } = payload;

    // TypeScript BUG: fix that alllows you to iterate through union types
    // https://github.com/microsoft/TypeScript/issues/36390#issuecomment-641718624
    // lines: 22, 25, 27
    const exists = (filteredOptions[id] as any).includes(name);

    // remove filter if it exists;
    // add filter if it doesnt
    if (exists) {
      filteredOptions[id] = (filteredOptions[id] as any).filter((item: string) => item !== name);
      state.filteredProducts = products;
    } else {
      (filteredOptions[id] as any).push(name);
      state.filteredProducts = [...products.filter((product: Product) => (filteredOptions[id] as any).includes(product[id]))];
    }
  }
};

export default mutations;
