import React from 'react';
import './App.css';
import CommentsList from './CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Список комментариев</h1>
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
