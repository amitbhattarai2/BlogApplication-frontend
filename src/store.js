import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { postDetailsReducer, postListReducer } from './reducers/postReducer'
import {
  placementCreateReducer,
  placementDetailsReducer,
  placementListReducer,
  placementUpdateReducer,
} from './reducers/placementReducer'

const reducer = combineReducers({
  placementList: placementListReducer,
  placementDetails: placementDetailsReducer,
  placementCreate: placementCreateReducer,
  placementUpdate: placementUpdateReducer,
  postList: postListReducer,
  postDetails: postDetailsReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
