import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from './../components/Rating';
import posts from './../posts';

const PostScreen = ({ match }) => {
  const post = posts.find((p) => p._id === match.params.id);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col md={10}>
                <h3>{post.title}</h3>
              </Col>
              <Col className="align-self-center text-right">
                {post.createdOn}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col md={1} className="text-left">
                {post.username}
              </Col>
              <Col md={2} className="text-left">
                <Rating
                  value={post.rating}
                  // text={`${post.numReviews} reviews`}
                />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>{post.description}</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <br />
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {post.numReplies > 0
              ? `${post.numReplies}개의 댓글`
              : '댓글이 없습니다.'}
          </ListGroup.Item>
          <ListGroup.Item>
            {/* if user doesn't logged in, disable button */}
            <Button className="btn btn-dark" type="button">
              Add reply
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default PostScreen;
