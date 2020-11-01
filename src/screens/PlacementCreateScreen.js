import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { createPlacement } from '../actions/placementActions'
import { listPostDetails } from '../actions/postActions'
import { PLACEMENT_CREATE_RESET } from '../constants/placementConstants'

const PlacementCreateScreen = ({ match, history }) => {
  const id = match.params.id

  const [packageName, setPackageName] = useState('')
  const [position, setPosition] = useState('')
  const [active, setActive] = useState(true)

  const dispatch = useDispatch()

  const postDetails = useSelector((state) => state.postDetails)
  const { post } = postDetails

  const placementCreate = useSelector((state) => state.placementCreate)
  const { error: errorCreate, success: successCreate } = placementCreate

  useEffect(() => {
    dispatch({ type: PLACEMENT_CREATE_RESET })
    if (successCreate) {
      dispatch({ type: PLACEMENT_CREATE_RESET })
      history.push('/')
    } else {
      if (!post || post.id != id) {
        dispatch(listPostDetails(match.params.id))
      }
    }
  }, [dispatch, history, match, id, post, successCreate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createPlacement(id, packageName, position, active))
  }

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Placement</h1>
        <p>Post ID {post.id}</p>
        {errorCreate && <p>{errorCreate.data}</p>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='package'>
            <Form.Label>Package</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter Package Name'
              value={packageName}
              required
              onChange={(e) => setPackageName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='position'>
            <Form.Label>Position</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter position'
              value={position}
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
                checked={active}
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
                checked={!active}
                onChange={() => setActive(false)}
              >
                Inactive
              </ToggleButton>
            </ButtonGroup>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Create Placement
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PlacementCreateScreen
