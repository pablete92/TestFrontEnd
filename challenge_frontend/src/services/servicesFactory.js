import ServicesMLSearch from "./servicesMLSearch";
import ServicesMLItem from "./servicesMLItems";

let services = {
  ServicesMLSearch,
  ServicesMLItem
};

export let ServicesFactory = {
  get: name => services[name]
};
