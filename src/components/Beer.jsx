import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Beers({ allBeers, setAllBeers }) {
    const [listOfBeers, setListOfBeers] = useState ([]);
    const getBeers = async () => {
        const response = await axios.get (
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setListOfBeers(response.data);
    };

    useEffect(() => {
        getBeers();
    }, []);
    
      return (
        <div>
            {listOfBeers && listOfBeers.map((beer) => (
                <div>
                    <div className="container" style={{ display: 'inline-block' }}>
                        <Link to={`/beer-details/${beer._id}`}> <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '150px' }} /></Link>
                    </div>
                    <div>
                        <h4>{beer.name}</h4>
                        <p>{beer.tagline}</p>
                        <span>{beer.contributed_by}</span>
                        <Link to={`/beer-details/${beer._id} `}>Details</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
    
    export default Beers