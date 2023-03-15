import { Divider } from '@chakra-ui/react';
import './movieSection.css';
//below contact to jason to add more movie
import myData from './movie.json';

function MovieSection() {
  return (
    <div class="wholePage">
      <div class="section1-superHero">
        <h4>Super Hero Movies</h4>
        <div class="main-flexBox">
          {/* 
        //below here we make pattern of data connect to json */}
          {myData.superHeroMovie.map((value) => {
            return (
        
              <div class="smallBox">
                <h4>{value.movieName}</h4>
                <img src = {value.image} />
                <p>{value.Genre}</p>
              </div>
            );
          })}






          {/* <div class="smallBox">
<h4>Iron Man</h4>
<img src = "https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
<p>2008</p>
        </div>

        <div class="smallBox">
<h4>Star War</h4>
<img src = "https://images.unsplash.com/flagged/photo-1589829482673-03413c918c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHdhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
<p>2008</p>
        </div>

        <div class="smallBox">
<h4>The Mandalorian</h4>
<img src = "https://images.unsplash.com/photo-1568578728400-95dd4f33a85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuZGFsb3JpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
<p>2023</p>
        </div>

        <div class="smallBox">
<h4>Ant Man</h4>
<img src = "https://images.unsplash.com/photo-1644509911789-1a9e2338ce61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHN1cGVyJTIwaGVyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
<p>2015</p>
        </div> */}
        </div>
      </div>

      {/* section 2 children movies */}

      <div class="section2-children">
        <h4>Action Movies</h4>

        <div class="main-flexBox">
        {myData.actionMovie.map((value, index) => {
            return (
        
              <div class="smallBox">
                <h4>{value.movieName}</h4>
                <img src = {value.image} />
                <p>{value.Genre}</p>
              </div>
            );
          })}



          {/* <div class="smallBox">
            <h4>James Bond</h4>
            <img src="https://images.unsplash.com/photo-1645116616542-71dc4fb88086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGphbWVzJTIwYm9uZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>

          <div class="smallBox">
            <h4>Jurassic Park</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>

          <div class="smallBox">
            <h4>Iron Man</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>

          <div class="smallBox">
            <h4>Iron Man</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div> */}
        </div>
      </div>

      {/* section 3 Drama movies */}

      <div class="section2-children">
        <h4>Drama Movies</h4>

        <div class="main-flexBox">
          <div class="smallBox">
            <h4>Iron Man</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>

          <div class="smallBox">
            <h4>Iron Man</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>

          <div class="smallBox">
            <h4>Iron Man</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>

          <div class="smallBox">
            <h4>Iron Man</h4>
            <img src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJvbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <p>2008</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
