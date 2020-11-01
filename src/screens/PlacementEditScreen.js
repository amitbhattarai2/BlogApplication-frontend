import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ButtonGroup, ToggleButton, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import {
  createPlacement,
  listPlacementDetails,
  updatePlacement,
} from '../actions/placementActions'
import { listPostDetails } from '../actions/postActions'
import { POST_DETAILS_FAIL } from '../constants/postConstants'
import {
  PLACEMENT_CREATE_RESET,
  PLACEMENT_UPDATE_RESET,
} from '../constants/placementConstants'

const PlacementEditScreen = ({ match, history }) => {
  const id = match.params.id
  const packageName = match.params.packageName
  const position = match.params.position

  const [packageNameFromState, setPackageName] = useState('')
  const [positionFromState, setPosition] = useState('')
  const [activeFromState, setActive] = useState(true)

  const dispatch = useDispatch()

  const placementDetails = useSelector((state) => state.placementDetails)
  const { loading, error, placement } = placementDetails

  const placementUpdate = useSelector((state) => state.placementUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = placementUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PLACEMENT_UPDATE_RESET })
      history.push(`/`)
    } else {
      if (!placement.post || placement.post.id != id) {
        console.log('here')
        dispatch(listPlacementDetails(id, packageName, position))
      } else {
        console.log('here')
        setPackageName(packageName)
        setPosition(position)
        setActive(placement.active)
      }
    }
  }, [dispatch, history, match, placement, id, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updatePlacement(
        id,
        packageNameFromState,
        positionFromState,
        activeFromState
      )
    )
  }

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Update Placement</h1>
        <p>Post ID {placement.post.id}</p>
        {errorUpdate && <p>{errorUpdate.data}</p>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='package'>
            <Form.Label>Package</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter Package Name'
              value={packageNameFromState}
              required
              onChange={(e) => setPackageName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='position'>
            <Form.Label>Position</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter position'
              value={positionFromState}
              required
              onChange={(e) => setPosition(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='status'>
            <Form.Label>Status </Form.Label>
            <ButtonGroup toggle>
              <ToggleButton
                key='0'
                type='radio'
                variant='secondary'
                name='radio'
                value='Active'
                required
                checked={activeFromState}
                onChange={() => setActive(true)}
              >
                Active
              </ToggleButton>
              <ToggleButton
                key='1'
                type='radio'
                variant='secondary'
                name='radio'
                value='Inactive'
                required
                checked={!activeFromState}
                onChange={() => setActive(false)}
              >
                Inactive
              </ToggleButton>
            </ButtonGroup>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update Placement
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PlacementEditScreen
