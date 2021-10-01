import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '/Users/ioanamateut/Desktop/React/app/src/components/ Header.js';
import AddBook from '/Users/ioanamateut/Desktop/React/app/src/components/AddBook';
import BooksList from '/Users/ioanamateut/Desktop/React/app/src/components/BooksList.js';
import useLocalStorage from '/Users/ioanamateut/Desktop/React/app/src/hooks/useLocalStorage.js';
import EditBook from '../components/EditBook';
import SignUp from '/Users/ioanamateut/Desktop/React/app/src/components/SignUp.js';
import { Redirect } from 'react-router';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
          <Route 
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/booklist"
            />
            <Route
              render={(props) => (
                <SignUp {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
          
            <Route
              render={(props) => (
                <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

