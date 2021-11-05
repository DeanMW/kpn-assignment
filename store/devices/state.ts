import { Devices } from '~/types/devices';

// create a state for filtered and default devices
export default (): Devices => ({
  products: [],
  filteredProducts: []
});
