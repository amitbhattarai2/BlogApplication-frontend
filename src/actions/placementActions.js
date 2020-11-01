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
} from '../constants/placementConstants'

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
    dispatch({ type: PLACEMENT_DETAILS_REQUEST })

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
  dispatch
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
      type: PLACEMENT_DELETE_FAIL,
      payload: error.response,
    })
  }
}
