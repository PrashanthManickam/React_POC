import products from "../apis/products";

let response;

export const fetchProducts = pageNumber => async dispatch => {
  response = await products.get(`/walmartproducts/${pageNumber}/8`);
  // console.log(response.data.statusCode, "statusCode");
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data
  });
};

export const fetchProduct = () => async dispatch => {
  // console.log(response.data.products, "response in actions");
  dispatch({
    type: "FETCH_PRODUCT",
    payload: response.data
  });
};

export const fetchFilteredProduct = query => async dispatch => {
  // console.log(query, "response in actions -- fetchFilteredProduct");

  dispatch({
    type: "FETCH_FILTERED_PRODUCT",
    query
    // payload: response.data
  });
};
