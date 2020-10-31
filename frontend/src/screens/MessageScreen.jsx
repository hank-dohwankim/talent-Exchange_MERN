import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';

const MessageScreen = ({ history }) => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessage({ message }));
    // history.push('/payment');
  };

  return (
    <FormContainer>
      <h1>Message</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="message">
          <Form.text>Message</Form.text>
          <Form.Control
            type="text"
            placeholder="Enter message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default MessageScreen;
