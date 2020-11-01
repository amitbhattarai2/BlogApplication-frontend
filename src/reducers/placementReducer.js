import {
  PLACEMENT_LIST_REQUEST,
  PLACEMENT_LIST_SUCCESS,
  PLACEMENT_LIST_FAIL,
  PLACEMENT_DETAILS_REQUEST,
  PLACEMENT_DETAILS_SUCCESS,
  PLACEMENT_DETAILS_FAIL,
  PLACEMENT_DELETE_REQUEST,
  PLACEMENT_DELETE_SUCCESS,
  PLACEMENT_DELETE_FAIL,
  PLACEMENT_CREATE_RESET,
  PLACEMENT_CREATE_FAIL,
  PLACEMENT_CREATE_SUCCESS,
  PLACEMENT_CREATE_REQUEST,
  PLACEMENT_UPDATE_REQUEST,
  PLACEMENT_UPDATE_SUCCESS,
  PLACEMENT_UPDATE_FAIL,
  PLACEMENT_UPDATE_RESET,
  PLACEMENT_DELETE_RESET,
} from '../constants/placementConstants'

export const placementListReducer = (state = { placements: [] }, action) => {
  switch (action.type) {
    case PLACEMENT_LIST_REQUEST:
      return { loading: true, placements: [] }
    case PLACEMENT_LIST_SUCCESS:
      return {
        loading: false,
        placements: action.payload,
        pages: action.payload.totalPages,
        page: action.payload.number,
      }
    case PLACEMENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const placementDetailsReducer = (
  state = { placement: { post: [] } },
  action
) => {
  switch (action.type) {
    case PLACEMENT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PLACEMENT_DETAILS_SUCCESS:
      return { loading: false, success: true, placement: action.payload }
    case PLACEMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const placementCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACEMENT_CREATE_REQUEST:
      return { loading: true }
    case PLACEMENT_CREATE_SUCCESS:
      return { loading: false, success: true, placement: action.payload }
    case PLACEMENT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PLACEMENT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const placementUpdateReducer = (state = { placement: {} }, action) => {
  switch (action.type) {
    case PLACEMENT_UPDATE_REQUEST:
      return { loading: true }
    case PLACEMENT_UPDATE_SUCCESS:
      return { loading: false, success: true, placement: action.payload }
    case PLACEMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PLACEMENT_UPDATE_RESET:
      return { placement: {} }
    default:
      return state
  }
}

export const placementDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACEMENT_DELETE_REQUEST:
      return { loading: true }
    case PLACEMENT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PLACEMENT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case PLACEMENT_DELETE_RESET:
      return {}
    default:
      return state
  }
}

// export const vendorProductListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case VENDOR_PRODUCT_LIST_REQUEST:
//       return { loading: true, products: [] }
//     case VENDOR_PRODUCT_LIST_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload.content,
//         pages: action.payload.totalPages,
//         page: action.payload.number,
//       }
//     case VENDOR_PRODUCT_LIST_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const productDetailsReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return { ...state, loading: true }
//     case PRODUCT_DETAILS_SUCCESS:
//       return { loading: false, success: true, product: action.payload }
//     case PRODUCT_DETAILS_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const productDeleteReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_DELETE_REQUEST:
//       return { loading: true }
//     case PRODUCT_DELETE_SUCCESS:
//       return { loading: false, success: true }
//     case PRODUCT_DELETE_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const productCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REQUEST:
//       return { loading: true }
//     case PRODUCT_CREATE_SUCCESS:
//       return { loading: false, success: true, product: action.payload }
//     case PRODUCT_CREATE_FAIL:
//       return { loading: false, error: action.payload }
//     case PRODUCT_CREATE_RESET:
//       return {}
//     default:
//       return state
//   }
// }

// export const productUpdateReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_UPDATE_REQUEST:
//       return { loading: true }
//     case PRODUCT_UPDATE_SUCCESS:
//       return { loading: false, success: true, product: action.payload }
//     case PRODUCT_UPDATE_FAIL:
//       return { loading: false, error: action.payload }
//     case PRODUCT_UPDATE_RESET:
//       return { product: {} }
//     default:
//       return state
//   }
// }

// export const productReviewCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REVIEW_REQUEST:
//       return { loading: true }
//     case PRODUCT_CREATE_REVIEW_SUCCESS:
//       return { loading: false, success: true }
//     case PRODUCT_CREATE_REVIEW_FAIL:
//       return { loading: false, error: action.payload }
//     case PRODUCT_CREATE_REVIEW_RESET:
//       return {}
//     default:
//       return state
//   }
// }

// export const productTopRatedReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case PRODUCT_TOP_REQUEST:
//       return { loading: true, products: [] }
//     case PRODUCT_TOP_SUCCESS:
//       return { loading: false, products: action.payload }
//     case PRODUCT_TOP_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
