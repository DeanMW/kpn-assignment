import { ActionTree } from 'vuex/types';
import { Devices } from '~/types/devices';
import { RootStoreState } from '~/types/state';

const actions: ActionTree<Devices, RootStoreState> = {
  async getDevices ({ commit }) {
    const devices = await this.$axios.$get('https://gist.githubusercontent.com/MaxKostenko/cfb308759c6b2c9762e91dadafe70c0e/raw/934bf752550a715712c905330c8db683674fb57c/phone_feed.json');
    commit('setDevices', devices);
  },
  filterDevices ({ commit, rootState: { devices } }, variable) {
    const filteredDevices = devices.products.filter((product) => {
      return product.manufacturer === variable.manufacturer;
    });

    commit('setDevices', { products: devices.products, filteredDevices });
  }
};

export default actions;