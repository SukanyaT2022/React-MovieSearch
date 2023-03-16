import './App.css';
import SearchBox from './searchBox.js';
import MovieSection from './movieSection.js';
import { useState } from 'react';

//parent page
function App() {
  const message = 'yourName';
  const message2 = 'message Two';
  const message3 = 'message Three';
  const [searchText, setSearchText] = useState('');

  const parent = (data) => {
    //alert(data);
    setSearchText(data);
  };

  return (
    <div class="mainBox">
      <div class="navBar">
        <h2>Movies Search</h2>
      </div>
      <SearchBox
        data={message}
        data2={message2}
        data3={message3}
        onFunCall={parent}
      />
      <MovieSection searchMovieText={searchText} />
    </div>
  );
}

export default App;
