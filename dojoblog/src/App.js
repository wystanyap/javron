import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  const link = "http://www.mangakakalot.com";
  //const person = {name:'javron',age:99};

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;

