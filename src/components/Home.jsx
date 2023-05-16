import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div className="App">
      <div className="home-page">
        <img src={beers} alt="all-beers"/>
        <h2>All Beers</h2>
        <p></p>
      </div>
      <div className="home-page">
        <img src={randomBeer} alt="random-beer"/>
        <h2>Random Beer</h2>
        <p></p>
      </div>
      <div className="home-page">
        <img src={newBeer} alt="new-beer"/>
        <h2>New beer</h2>
        <p></p>
      </div>
    </div>
  );
}

export default Home;