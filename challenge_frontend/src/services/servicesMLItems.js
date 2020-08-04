import Services from "./servicesML";

let resource = "/items";

export default {
  getItemById(item) {
    return Services.get(`${resource}/${item}`);
  }
};
