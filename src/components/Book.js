import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  bookname,
  author,
  publisher,
  year,
  date,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <Card border="dark" style={{ width: '18rem' }} className="book">
      <Card.Img variant="top" src="https://images.pexels.com/photos/3109168/pexels-photo-3109168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Publisher: {publisher} </div>
          <div>Year: {year} </div>
          <div>Date: {new Date(date).toDateString()}</div>
          <Form.Check
        type="checkbox"
        id="customControlAutosizing"
        label="Check if the book is lent"
      />
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}

        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>

    </Card>
  );
};

export default Book;
