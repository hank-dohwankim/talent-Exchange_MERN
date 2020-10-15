import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Post from './../components/Post';
import posts from './../posts';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
