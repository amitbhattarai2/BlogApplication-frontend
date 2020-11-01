import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Post = ({ post }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
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
