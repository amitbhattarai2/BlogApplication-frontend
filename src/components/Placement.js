import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Badge, Button } from 'react-bootstrap'

const Placement = ({ placement }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link
          to={`/placements/${placement.post.id}/${placement.packageName}/${placement.position}/edit`}
        >
          <Card.Img src={placement.post.image} variant='top' />
        </Link>

        <Card.Body>
          <Link
            to={`/placements/${placement.post.id}/${placement.packageName}/${placement.position}/edit`}
          >
            <Card.Title as='div'>
              <strong>Slug: {placement.post.slug}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='h5'>PackageName: {placement.packageName}</Card.Text>
          <Card.Text as='h5'>Post ID: {placement.post.id}</Card.Text>
          <Card.Text as='h5'>Position: {placement.position}</Card.Text>
          <Link to={placement.post.url}>Goto Post URL</Link>
          {placement.active ? (
            <Badge pill variant='success'>
              Active
            </Badge>
          ) : (
            <Badge pill variant='danger'>
              Inactive
            </Badge>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default Placement
