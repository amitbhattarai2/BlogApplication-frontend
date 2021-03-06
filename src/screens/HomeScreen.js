import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Button, Col } from 'react-bootstrap'
import Placement from '../components/Placement'
import Post from '../components/Post'

import { deletePlacement, listPlacements } from '../actions/placementActions'
import { listPosts } from '../actions/postActions'
import { PLACEMENT_DELETE_RESET } from '../constants/placementConstants'

const HomeScreen = ({ match, history }) => {
  const dispatch = useDispatch()

  const placementList = useSelector((state) => state.placementList)
  const { placements } = placementList

  const postList = useSelector((state) => state.postList)
  const { posts } = postList

  const placementDelete = useSelector((state) => state.placementDelete)
  const { success } = placementDelete

  useEffect(() => {
    if (success) {
      dispatch(listPlacements())
      dispatch({ type: PLACEMENT_DELETE_RESET })
    }
    dispatch(listPlacements())
    dispatch(listPosts())
  }, [dispatch, history, match, success])

  const deleteHandler = (placement) => {
    dispatch(
      deletePlacement(
        placement.post.id,
        placement.packageName,
        placement.position
      )
    )
  }

  return (
    <>
      <h1>Current Placements</h1>
      <>
        {placements.length == 0 ? (
          <h6>No Current Placements </h6>
        ) : (
          <Row>
            {placements.map((placement) => (
              <Col
                key={
                  (placement.post.id, placement.packageName, placement.position)
                }
                sm={12}
                md={6}
                lg={4}
                xl={3}
              >
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(placement)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
                <Placement placement={placement} />
              </Col>
            ))}
          </Row>
        )}
      </>
      <h2>Available Posts</h2>
      <>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
              <Post post={post} />
            </Col>
          ))}
        </Row>
      </>
    </>
  )
}

export default HomeScreen
