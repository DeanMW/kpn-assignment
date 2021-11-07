import { Devices } from '~/types/devices';

// create a state for filtered and default devices
export default (): Devices => ({
  products: [],
  filteredProducts: [],
  filteredOptions: {
    manufacturer: [],
    colors: [],
    has_5g: [],
    operating_system: [],
    has_esim: [],
    refurbished: []
  }
});
