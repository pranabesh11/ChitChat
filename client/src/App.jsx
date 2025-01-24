import './App.css';
import {io} from 'socket.io-client';

function App() {
  const socket = io('http://localhost:8000');
  return (
    <div>
      <p>HEllo</p>
    </div>
  )
}

export default App
