import { ActionTree } from 'vuex/types';
import { Devices } from '~/types/devices';
import { RootStoreState } from '~/types/state';

const actions: ActionTree<Devices, RootStoreState> = {
  async fetchDevices ({ commit }) {
    const apiUrl = 'https://gist.githubusercontent.com/MaxKostenko/cfb308759c6b2c9762e91dadafe70c0e/raw/934bf752550a715712c905330c8db683674fb57c/phone_feed.json';
    const devices = await this.$axios.$get(apiUrl);
    commit('setDevices', devices);
  },
  setFilteredOptions ({ commit }, filter): void {
    commit('setFilteredOptions', filter);
  }
};

export default actions;
