import { GetterTree } from 'vuex/types';
import { Devices, Filters, Product } from '~/types/devices';
import { RootStoreState } from '~/types/state';

interface selectOption {
  name: String | boolean;
  isSelected: Boolean;
  count?: number | undefined;
  colorCode?: String;
}

// TODO: Move to helpers
const getUniqueItems = (items: selectOption[]) => {
  const uniqueItems = [
    ...new Map(
      items.map((item: selectOption) => [item.name, item]))
      .values()
  ];

  uniqueItems.forEach((item, index) => {
    let count = 0;
    items.forEach(duplicateItem => duplicateItem.name === item.name && count++);
    uniqueItems[index] = { ...uniqueItems[index], count };
  });

  return uniqueItems;
};

// const getColorCodes = (devices: Product[]) => {
//   return devices.map((product: Product) => {
//     return product.variants.map((variant: Variant) => {
//       // eslint-disable-next-line camelcase
//       const { attributes: { color, color_code, color_name } } = variant;
//       return { color, colorCode: color_code, colorName: color_name };
//     });
//   });
// };

const getters: GetterTree<Devices, RootStoreState> = {
  getDevices (state): Product[] {
    return state.filteredProducts;
  },

  getFilteredOptions (state): Filters {
    return state.filteredOptions;
  },

  // get unique brands and their count
  getBrands (state): selectOption[] {
    const items = state.products.map((item: Product) =>
      ({ name: item.manufacturer, isSelected: false })
    );

    return getUniqueItems(items);
  },

  // get unique filtered colors as well as their counts
  getColors (state): selectOption[] {
    let colors: selectOption[] = [];

    // TODO: could use reduce here
    state.filteredProducts.forEach((filteredProducts: Product) => {
      colors = [
        ...colors,
        ...filteredProducts.colors.map(color => ({ name: color, isSelected: false }))
      ];
    });

    return getUniqueItems(colors);
  },

  // get unique filtered operating systems and their counts
  getOS (state): selectOption[] {
    const items = state.filteredProducts.map((item: Product) =>
      ({ name: item.operating_system, isSelected: false })
    );
    return getUniqueItems(items);
  },
  get5g (state): selectOption[] {
    const items = state.filteredProducts.map((item: Product) =>
      ({ name: item.has_5g, isSelected: false })
    );

    return getUniqueItems(items);
  },
  getEsim (state): selectOption[] {
    const items = state.filteredProducts.map((item: Product) =>
      ({ name: item.has_esim, isSelected: false })
    );
    return getUniqueItems(items);
  },
  isRefurbished (state): selectOption[] {
    const items = state.filteredProducts.map((item: Product) =>
      ({ name: item.refurbished, isSelected: false })
    );
    return getUniqueItems(items);
  },
};

export default getters;
