import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Button } from 'react-bootstrap'

const Post = ({ post }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/posts/${post.id}/create`}>
          <Col className='text-right'>
            <Button className='my-3'>
              <i className='fas fa-plus'></i> Create Placement
            </Button>
          </Col>
        </Link>
        <Card.Img src={post.image} variant='top' />

        <Card.Body>
          <Card.Title as='div'>
            <strong>Slug: {post.slug}</strong>
          </Card.Title>

          <Card.Text as='h5'>ID: {post.id}</Card.Text>
          <Link to={post.url}>Goto Post URL</Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Post
