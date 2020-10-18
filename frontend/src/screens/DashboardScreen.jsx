import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import { addToDashboard } from '../actions/dashboardActions';

const DashboardScreen = ({ match, location, history }) => {
  const postId = match.params.id;
  const userId = location.search ? location.search.split('=')[1] : '';

  const dispatch = useDispatch();

  const dashboard = useSelector((state) => state.dashboard);
  const { dashboardMessages } = dashboard;

  console.log(dashboardMessages);

  useEffect(() => {
    if (postId) {
      dispatch(addToDashboard(postId, userId));
    }
  }, [dispatch, postId, userId]);

  return <Row>Dashboard</Row>;
};

export default DashboardScreen;
