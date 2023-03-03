
import './App.css';
import SearchBox from'./searchBox.js';
import MovieSection from'./movieSection.js';
function App() {
  const message = "yourName"
  const message2 = "message Two"
  return (

   <div class="mainBox">
<div class="navBar">
<h2>Movies Search</h2>
</div>
<SearchBox data={message} data2={message2}/>
<MovieSection/>







   </div>
   
  );
}

export default App;
