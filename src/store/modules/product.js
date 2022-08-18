/* eslint-disable no-console */
// import axios from "axios";
const vueUrl = "https://canifa.com";
import axios from "axios";

const state = {
  product: [],
  product_detail: null,
  product_children: null,
};

const getters = {
  product: (state) => {
    return state.product;
  },
  product_detail: (state) => {
    return state.product_detail;
  },
  product_children: (state) => {
    return state.product_children;
  },
};

const mutations = {
  SET_PRODUCT(state, payload) {
    state.product = payload || {};
    // console.log(state.layouts);
  },
  SET_PRODUCT_DETAIL(state, payload) {
    state.product_detail = payload || {};
    // console.log(state.layouts);
  },
  SET_PRODUCT_CHILDREN(state, payload) {
    state.product_children = payload || {};
    // console.log(state.layouts);
  },
};
// {"query":{"bool":{"filter":{"bool":{"must":[{"terms":{"category_ids":[3938,3939,3940,3941,3942]}},{"terms":{"visibility":[2,3,4]}},{"terms":{"status":[0,1]}}]}}}}}
const actions = {
  async loadProduct({ commit }, filterQuery) {
    try {
      let url = null;
      const request = `{"query":{"bool":{"filter":{"bool":{"must":[{"terms":{"category_ids":[${filterQuery}]}},{"terms":{"visibility":[2,3,4]}},{"terms":{"status":[0,1]}}]}}}}}`;
      url =
        vueUrl +
        `/api/catalog/vue_storefront_catalog_2/product/_search?request=${request}&sort=id:desc`;
      const response = await axios.get(url);
      let items = [];
      let total = 0;
      if (response.data && response?.data?.hits?.hits?.length > 0) {
        total = response.data.hits?.total?.value;
        //Reactotron.log(response.data.hits.hits);
        response.data.hits.hits.forEach((value) => {
          let item = value._source;
          let on_sale = false;
          let price = item.price;
          const date_sale_from = item.special_from_date;
          const date_sale_to = item.special_to_date;
          //   if (item.special_price && (date_sale_from || date_sale_to)) {
          //     on_sale = VuestorefrontUtils.isSpecialPriceActive(
          //       date_sale_from,
          //       date_sale_to
          //     );
          //   }

          if (on_sale) {
            price = item.special_price;
          }
          const media_gallery = item.media_gallery;
          //   let images = [
          //     VuestorefrontUtils.getProductImageUrl(item, "small_image"),
          //   ];
          if (media_gallery && media_gallery.length > 1) {
            // for (let index = 1; index < media_gallery.length; index++) {
            //   images.push(
            //     VuestorefrontUtils.getProductImageUrlByName(
            //       media_gallery[index].image
            //     )
            //   );
            // }
          }
          //item.configurable_options.map(attribute => {});
          const product = {
            ...item,
            //description: item.description,
            //category_ids: item.category_ids,
            tax_class: item.tax_class_id,
            sale_price: item.special_price,
            date_sale_from,
            date_sale_to,
            on_sale,
            price,
            regular_price: item.original_price,
            // images,
          };
          //Reactotron.log(product);
          items.push(product);
        });
      }
      //Reactotron.log(items);
      commit("SET_PRODUCT", items);
      return { data: items, total: total };
    } catch (error) {
      console.error(error);
    }
  },
  async loadProductSku({ commit }, filterQuery) {
    try {
      let url = null;

      const request = `{"query":{"bool":{"filter":{"bool":{"must":[{"bool":{"should":[{"terms":{"category_ids":[${filterQuery}]}}]}},{"bool":{"should":[{"range":{"final_price":{}}},{"bool":{"must":[{"range":{"final_price":{}}},{"match":{"type_id":"configurable"}}]}}]}}],"filter":{"bool":{"must":[{"terms":{"visibility":[2,3,4]}},{"terms":{"status":[0,1]}}]}}}}}},"sort":[{"category.position":{"order":"asc","mode":"min","nested_path":"category","nested_filter":{"term":{"category.category_id":${filterQuery}}}}}]}`;
      url =
        vueUrl +
        `/api/catalog/vue_storefront_catalog_2/product/_search?request=${request}&sort=id:desc`;
      const response = await axios.get(url);
      let items = [];
      let total = 0;
      if (response.data && response?.data?.hits?.hits?.length > 0) {
        total = response.data.hits?.total?.value;
        //Reactotron.log(response.data.hits.hits);
        response.data.hits.hits.forEach((value) => {
          let item = value._source;
          let on_sale = false;
          let price = item.price;
          const date_sale_from = item.special_from_date;
          const date_sale_to = item.special_to_date;
          //   if (item.special_price && (date_sale_from || date_sale_to)) {
          //     on_sale = VuestorefrontUtils.isSpecialPriceActive(
          //       date_sale_from,
          //       date_sale_to
          //     );
          //   }

          if (on_sale) {
            price = item.special_price;
          }
          const media_gallery = item.media_gallery;
          //   let images = [
          //     VuestorefrontUtils.getProductImageUrl(item, "small_image"),
          //   ];
          if (media_gallery && media_gallery.length > 1) {
            // for (let index = 1; index < media_gallery.length; index++) {
            //   images.push(
            //     VuestorefrontUtils.getProductImageUrlByName(
            //       media_gallery[index].image
            //     )
            //   );
            // }
          }
          //item.configurable_options.map(attribute => {});
          const product = {
            ...item,
            //description: item.description,
            //category_ids: item.category_ids,
            tax_class: item.tax_class_id,
            sale_price: item.special_price,
            date_sale_from,
            date_sale_to,
            on_sale,
            price,
            regular_price: item.original_price,
            // images,
          };
          //Reactotron.log(product);
          items.push(product);
        });
      }
      //Reactotron.log(items);
      commit("SET_PRODUCT", items);
      return { data: items, total: total };
    } catch (error) {
      console.error(error);
    }
  },
  async loadProductDeitail({ commit }, product_sku) {
    try {
      let url = null;
      const request = `{"query":{"bool":{"filter":{"terms":{"sku":["${product_sku}"]}}}}}`;
      url =
        vueUrl +
        `/api/catalog/vue_storefront_catalog_2/product/_search?request=${request}&sort=id:desc`;
      const response = await axios.get(url);
      let items = [];
      let total = 0;
      if (response.data && response?.data?.hits?.hits?.length > 0) {
        total = response.data.hits?.total?.value;
        //Reactotron.log(response.data.hits.hits);
        response.data.hits.hits.forEach((value) => {
          let item = value._source;
          let on_sale = false;
          let price = item.price;
          const date_sale_from = item.special_from_date;
          const date_sale_to = item.special_to_date;

          if (on_sale) {
            price = item.special_price;
          }
          const media_gallery = item.media_gallery;
          //   let images = [
          //     VuestorefrontUtils.getProductImageUrl(item, "small_image"),
          //   ];
          if (media_gallery && media_gallery.length > 1) {
            // for (let index = 1; index < media_gallery.length; index++) {
            //   images.push(
            //     VuestorefrontUtils.getProductImageUrlByName(
            //       media_gallery[index].image
            //     )
            //   );
            // }
          }
          //item.configurable_options.map(attribute => {});
          const product = {
            ...item,
            //description: item.description,
            //category_ids: item.category_ids,
            tax_class: item.tax_class_id,
            sale_price: item.special_price,
            date_sale_from,
            date_sale_to,
            on_sale,
            price,
            regular_price: item.original_price,
            // images,
          };
          //Reactotron.log(product);
          items.push(product);
        });
      }
      commit("SET_PRODUCT_DETAIL", product_sku);
      return { data: items, total: total };
    } catch (error) {
      console.error(error);
    }
  },
  async loadProductChildren({ commit }, product_slug) {
    try {
      let url = null;

      const request = `{"query":{"bool":{"filter":{"bool":{"must":[{"terms":{"slug":["${product_slug}"]}},{"terms":{"is_active":[true]}}]}}}}}`;

      url =
        vueUrl +
        `/api/catalog/vue_storefront_catalog_2/category/_search?request=${request}&sort=id:desc`;
      const response = await axios.get(url);
      let items = [];
      let total = 0;
      if (response.data && response?.data?.hits?.hits?.length > 0) {
        total = response.data.hits?.total?.value;
        //Reactotron.log(response.data.hits.hits);
        response.data.hits.hits.forEach((value) => {
          let item = value._source;
          let on_sale = false;
          let price = item.price;
          const date_sale_from = item.special_from_date;
          const date_sale_to = item.special_to_date;

          if (on_sale) {
            price = item.special_price;
          }
          const media_gallery = item.media_gallery;
          //   let images = [
          //     VuestorefrontUtils.getProductImageUrl(item, "small_image"),
          //   ];
          if (media_gallery && media_gallery.length > 1) {
            // for (let index = 1; index < media_gallery.length; index++) {
            //   images.push(
            //     VuestorefrontUtils.getProductImageUrlByName(
            //       media_gallery[index].image
            //     )
            //   );
            // }
          }
          //item.configurable_options.map(attribute => {});
          const product = {
            ...item,
            //description: item.description,
            //category_ids: item.category_ids,
            tax_class: item.tax_class_id,
            sale_price: item.special_price,
            date_sale_from,
            date_sale_to,
            on_sale,
            price,
            regular_price: item.original_price,
            // images,
          };
          //Reactotron.log(product);
          items.push(product);
        });
      }
      commit("SET_PRODUCT_CHILDREN", product_slug);
      return { data: items, total: total };
    } catch (error) {
      console.error(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
