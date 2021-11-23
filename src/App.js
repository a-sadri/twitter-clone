import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
