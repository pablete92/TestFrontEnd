import Services from "./servicesML";

let resource = "/sites/MLA";

export default {
  getSearch(query) {
    return Services.get(`${resource}/search?q=${query}`);
  }
};
