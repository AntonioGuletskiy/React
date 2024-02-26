
import './App.css';
import CommentsList from './CommentList';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>My Message</h1>
       <Message text="Hello, world!"/>
       <CommentsList/>
      </header>
    </div>
  );
}

export default App;
