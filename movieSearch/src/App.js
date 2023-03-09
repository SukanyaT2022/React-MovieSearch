
import './App.css';
import SearchBox from'./searchBox.js';
import MovieSection from'./movieSection.js';


//parent page
function App() {
  const message = "yourName"
  const message2 = "message Two"
  const message3 = "message Three"

  const parent = () =>{
    alert("This is parents")
  }

  
  return (

   <div class="mainBox">
<div class="navBar">
<h2>Movies Search</h2>
</div>
<SearchBox data={message} data2={message2} data3={message3}  onFunCall={parent} />
<MovieSection />







   </div>
   
  );
}

export default App;
