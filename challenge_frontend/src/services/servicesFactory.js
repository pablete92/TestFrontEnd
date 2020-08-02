import ServicesMLSearch from "./servicesMLSearch";

let services = {
  ServicesMLSearch
};

export let ServicesFactory = {
  get: name => services[name]
};
