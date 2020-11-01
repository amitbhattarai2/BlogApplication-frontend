import axios from 'axios'
import {
  PLACEMENT_LIST_REQUEST,
  PLACEMENT_LIST_SUCCESS,
  PLACEMENT_LIST_FAIL,
  PLACEMENT_DETAILS_REQUEST,
  PLACEMENT_DETAILS_SUCCESS,
  PLACEMENT_DETAILS_FAIL,
  PLACEMENT_DELETE_SUCCESS,
  PLACEMENT_DELETE_REQUEST,
  PLACEMENT_DELETE_FAIL,
  PLACEMENT_CREATE_REQUEST,
  PLACEMENT_CREATE_SUCCESS,
  PLACEMENT_CREATE_FAIL,
  PLACEMENT_UPDATE_REQUEST,
  PLACEMENT_UPDATE_SUCCESS,
  PLACEMENT_UPDATE_FAIL,
  PLACEMENT_CREATE_REVIEW_REQUEST,
  PLACEMENT_CREATE_REVIEW_SUCCESS,
  PLACEMENT_CREATE_REVIEW_FAIL,
  PLACEMENT_TOP_REQUEST,
  PLACEMENT_TOP_SUCCESS,
  PLACEMENT_TOP_FAIL,
} from '../constants/placementConstants'
import { POST_DETAILS_REQUEST } from '../constants/postConstants'

export const listPlacements = () => async (dispatch) => {
  try {
    dispatch({ type: PLACEMENT_LIST_REQUEST })

    const { data } = await axios.get(`/api/placements`)

    dispatch({
      type: PLACEMENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PLACEMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listPlacementDetails = (id, packageName, position) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST })

    const { data } = await axios.get(
      `/api/placements/post/${id}/package/${packageName}/position/${position}`
    )

    dispatch({
      type: PLACEMENT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PLACEMENT_DETAILS_FAIL,
      payload: error.response,
    })
  }
}

export const createPlacement = (id, packageName, position, active) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PLACEMENT_CREATE_REQUEST,
    })

    const { data } = await axios.post(`/api/placements`, {
      id,
      packageName,
      position,
      active,
    })

    dispatch({
      type: PLACEMENT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: PLACEMENT_CREATE_FAIL,
      payload: error.response,
    })
  }
}

export const updatePlacement = (id, packageName, position, active) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PLACEMENT_UPDATE_REQUEST,
    })

    const { data } = await axios.put(`/api/placements/${id}`, {
      id,
      packageName,
      position,
      active,
    })

    dispatch({
      type: PLACEMENT_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: PLACEMENT_UPDATE_FAIL,
      payload: error.response,
    })
  }
}

export const deletePlacement = (id, packageName, position) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PLACEMENT_DELETE_REQUEST,
    })

    const placementDTO = {
      id: 1,
      packageName: 'abc',
      position: 2,
    }

    axios.delete(`/api/placements/${id}/${packageName}/${position}`)

    dispatch({ type: PLACEMENT_DELETE_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: PLACEMENT_DETAILS_FAIL,
      payload: error.response,
    })
  }
}

// export const listVendorProducts = (id, pageNumber = '') => async (dispatch) => {
//   try {
//     dispatch({ type: VENDOR_PRODUCT_LIST_REQUEST })

//     const { data } = await axios.get(
//       `/api/products/vendors/${id}?pageNumber=${pageNumber}`
//     )

//     dispatch({
//       type: VENDOR_PRODUCT_LIST_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: VENDOR_PRODUCT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

// export const listProductDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: PRODUCT_DETAILS_REQUEST })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.get(`/api/products/${id}`, config)

//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

// export const deleteProduct = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_DELETE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     await axios.delete(`/api/products/${id}`, config)

//     dispatch({
//       type: PRODUCT_DELETE_SUCCESS,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_DELETE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const createProduct = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_CREATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.post(`/api/products`, {}, config)

//     dispatch({
//       type: PRODUCT_CREATE_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_CREATE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const updateProduct = (product) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_UPDATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(`/api/products`, product, config)

//     dispatch({
//       type: PRODUCT_UPDATE_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_UPDATE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const createProductReview = (productId, review) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     await axios.post(`/api/products/${productId}/reviews`, review, config)

//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_SUCCESS,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_FAIL,
//       payload: message,
//     })
//   }
// }

// export const listTopProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_TOP_REQUEST })

//     const { data } = await axios.get(`/api/products/top`)

//     dispatch({
//       type: PRODUCT_TOP_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_TOP_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
