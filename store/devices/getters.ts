import { GetterTree } from 'vuex/types';
import { Devices, Product } from '~/types/devices';
import { RootStoreState } from '~/types/state';

const getters: GetterTree<Devices, RootStoreState> = {
//   getDeviceColors (state): deviceColor[] | null {
//     const test = state.products.map((product) => {
//       return product.variants.map((variant) => {
//         return { colorCode: variant.attributes.color_code, color: variant.attributes.color, colorName: variant.attributes.color_name };
//       });
//     });
//     const filteredArray = [...new Set(test)];
//     console.log(filteredArray);
//     return null;
//   },
  getDevices (state): Product[] {
    return state.filteredProducts;
  }
};

export default getters;
