import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : '',
    author: props.book ? props.book.author : '',
    year: props.book ? props.book.year : '',
    publisher: props.book ? props.book.publisher : '',
    formBasicCheckbox: props.book ? props.book.formBasicCheckbox:'',
    date: props.book ? props.book.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, publisher, year,formBasicCheckbox } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, publisher, year];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        publisher,
        year,
        formBasicCheckbox,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields!';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
     
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      <div className="description1">What is the best way of keeping track of books lent to friends?</div>
      <div className="description2">Book Track is an application created to easily keep track of the books you have borrowed or given as a gift.
       Manage your personal collection and don't forget any book!</div>

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>Publisher</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="publisher"
            value={publisher}
            placeholder="Enter publisher of book"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="year"
            value={year}
            placeholder="Enter available year"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
