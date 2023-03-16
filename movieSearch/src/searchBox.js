import { useState } from 'react';
import './searchBox.css';
//props -carry data from parent app.js to child component searchbox.js
//this is child
function SearchBox(props) {
  const [searchInput, setSearchInput] = useState(''); // usestate will set value to variable(searchInput)

  const clickHere = () => {
    let data = 'test data';
    props.onFunCall(searchInput);
    //props means link to parent component--onFuncall is function to link to parent event
  };

  const handleInput = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <div class="main-form">
      <h2>{props.data}</h2>
      <h5>{props.data2}</h5>
      <p>{props.data3}</p>
      <form>
        <input
          type="text"
          class="serchBox"
          value={searchInput}
          onChange={handleInput}
        />
        <input
          type="button"
          value="search"
          class="searchButton"
          onClick={() => {
            clickHere();
          }}
        />
      </form>
    </div>
  );
}

export default SearchBox;
