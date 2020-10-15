import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Post = ({ post }) => {
  return (
    <a href={`/post/${post._id}`}>
      <Card className="my-3 p-3 rounded">
        <Card.Text as="div">
          <span>{post.myTalent}</span>
          <i className="fas fa-exchange-alt"></i>
          <span>{post.wantedTalent}</span>
        </Card.Text>
        <Card.Body>
          <Card.Title as="div">
            <strong>{post.title}</strong>
          </Card.Title>
          <Card.Text as="div">{post.description}</Card.Text>
          <Card.Text as="div">
            <div className="my-3">
              <p>{post.views} views</p>
              <p>{post.numReplies} replies</p>
              <Rating value={post.rating} text={`${post.numReviews}`} />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Post;
