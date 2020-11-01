import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, CardColumns, Button, Col, Badge } from 'react-bootstrap'
import Placement from '../components/Placement'
import Post from '../components/Post'

import { listPlacements } from '../actions/placementActions'
import { listPosts } from '../actions/postActions'

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch()

  const placementList = useSelector((state) => state.placementList)
  const { placements } = placementList

  const postList = useSelector((state) => state.postList)
  const { posts } = postList

  useEffect(() => {
    dispatch(listPlacements())
    dispatch(listPosts())
  }, [dispatch])

  return (
    <>
      <h1>Current Placements</h1>
      <>
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
              <Placement placement={placement} />
            </Col>
          ))}
        </Row>
      </>
      <h2>Available Posts</h2>
      <>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
              <Link to={`/posts/${post.id}/create`}>
                <Col className='text-right'>
                  <Button className='my-3'>
                    <i className='fas fa-plus'></i> Create Placement
                  </Button>
                </Col>
              </Link>
              <Post post={post} />
            </Col>
          ))}
        </Row>
      </>
    </>
  )
}

export default HomeScreen
