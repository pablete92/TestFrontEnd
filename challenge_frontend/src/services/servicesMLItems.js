import Services from "./servicesML";

let resource = "/items";

export default {
  getItemById(itemId) {
    return Services.get(`${resource}/${itemId}`);
  },
  getDescriptionById(itemId) {
    return Services.get(`${resource}/${itemId}/description`);
  }
};
