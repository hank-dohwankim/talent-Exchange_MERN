import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import {
  addToDashboard,
  removeFromDashboard,
} from '../actions/dashboardActions';
import Message from '../components/Message';

const DashboardScreen = ({ match, location, history }) => {
  const postId = match.params.id;
  const userId = location.search ? location.search.split('=')[1] : '';

  const dispatch = useDispatch();

  const dashboard = useSelector((state) => state.dashboard);
  const { dashboardMessages } = dashboard;

  useEffect(() => {
    if (postId) {
      dispatch(addToDashboard(postId, userId));
    }
  }, [dispatch, postId, userId]);

  const removeFromDashboardHandler = (postId) => {
    dispatch(removeFromDashboard(postId));
  };

  const startChatHandler = (postId, userId) => {
    history.push('/login?redirect=message');
  };

  return (
    <Row>
      <Col>
        <h3>Interested talent list</h3>
        <br />
        {dashboardMessages.length === 0 ? (
          <Message>
            Your list is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup>
            {dashboardMessages.map((message) => (
              <ListGroup.Item key={message.post}>
                <Row>
                  <Col md={4}>
                    <Link to={`/post/${message.post}`}>{message.title}</Link>
                  </Col>
                  <Col md={5}>{message.description}</Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="success"
                      onClick={startChatHandler}
                    >
                      <i className="fas fa-comments"></i>
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => removeFromDashboardHandler(message.post)}
                    >
                      <i className="fas fa-trash" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default DashboardScreen;
