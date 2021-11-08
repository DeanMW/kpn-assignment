import { MutationTree } from 'vuex/types';
import { Devices, Filters, Product } from '~/types/devices';

type filterItem = {
  id: keyof Filters;
  name: string;
  count: number | undefined;
}

const applyFilters = (products: Product[], filteredOptions: Filters, id: keyof Filters) => {
  // TODO: can be done using sum for efficiency
  return products.filter((product: Product) => (filteredOptions[id] as any).includes(product[id]));
};

const mutations: MutationTree<Devices> = {
  setDevices (state, payload: {products: Product[], filteredProducts: Product[]}) {
    state.products = payload.products;
    state.filteredProducts = payload.products;
  },
  setFilteredOptions (state: Devices, payload: filterItem) {
    const { filteredOptions, products } = state;
    const { id, name } = payload;

    // dont filter colors,
    // way too much effort with this api
    if (id === 'colors') { return; };

    // TypeScript BUG: fix that alllows you to iterate through union types
    // https://github.com/microsoft/TypeScript/issues/36390#issuecomment-641718624
    // lines: 22, 25, 27
    const exists = (filteredOptions[id] as any).includes(name);

    // remove filter if it exists;
    // add filter if it doesnt;
    if (exists) {
      filteredOptions[id] = (filteredOptions[id] as any).filter((item: string) => item !== name);

      // reset products and reapply filters;
      state.filteredProducts = products;

      Object.keys(state.filteredOptions).forEach((key: string) => {
        if (state.filteredOptions[key as keyof Filters].length > 0) {
          state.filteredProducts = applyFilters(products, filteredOptions, key as keyof Filters);
        }
      });
    } else {
      (filteredOptions[id] as any).push(name);

      if (id === 'manufacturer') {
        state.filteredProducts = applyFilters(products, filteredOptions, id);
      } else {
        state.filteredProducts = applyFilters(state.filteredProducts, filteredOptions, id);
      }
    }
  }
};

export default mutations;
