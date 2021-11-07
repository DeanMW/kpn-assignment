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
    state.filteredProducts = payload.filteredProducts ?? payload.products;
  },
  setFilteredOptions (state: Devices, payload: filterItem) {
    const { filteredOptions } = state;
    const { id, name } = payload;

    // anoying TS fix that alllows you to iterate through union types
    // https://github.com/microsoft/TypeScript/issues/36390#issuecomment-641718624
    // lines: 22, 25, 27
    const exists = (filteredOptions[id] as any).includes(name);

    if (exists) {
      filteredOptions[id] = (filteredOptions[id] as any).filter((item: string) => item !== name);
    } else {
      (filteredOptions[id] as any).push(name);
    }
  }
};

export default mutations;
