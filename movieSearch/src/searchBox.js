
import './searchBox.css';
//props -carry data from parent app.js to child component searchbox.js
function SearchBox(props) {
    return (
     <div class="main-form">
          <h2>{props.data}</h2>
          <h5>{props.data2}</h5>
<form>
<input type="text" class="serchBox"/>
<input type="submit" value="search" class="searchButton"/>

</form>

     </div>
    );
  }
  
  export default SearchBox;
  