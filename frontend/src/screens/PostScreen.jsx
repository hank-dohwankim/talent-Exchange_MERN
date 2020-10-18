import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from './../components/Rating';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listPostDetails } from '../actions/postActions';

const PostScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  const [user, setUser] = useState(post.user);

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));
  }, [dispatch, match]);

  const sendMessageHandler = () => {
    history.push(`/dashboard/${match.params.id}?user=${post.user}`);
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
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
                  <Col md={3} className="text-left">
                    <Rating
                      value={post.rating}
                      text={`${post.numReviews} reviews`}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>{post.description}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  onClick={sendMessageHandler}
                  className="btn btn-dark"
                  type="button"
                >
                  문의하기
                </Button>
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
      )}
    </>
  );
};

export default PostScreen;
