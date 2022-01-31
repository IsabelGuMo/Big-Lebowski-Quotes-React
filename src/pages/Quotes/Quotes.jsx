import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
    const QUOTES_URL = 'http://lebowski.me/api/quotes/random';
    const [quotes, setQuotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios(QUOTES_URL).then((res) => {
            setQuotes(res.data.quote.lines);
            setIsLoaded(true);
        });
    }, []);

    return (
        <div className='quotes-container'>
            
            {quotes.map((quote) => {
                return <div className='quotes-card'>
                    <h3>{quote.character.name}</h3>
                    <p>{quote.text}</p>
                   <img src='www.cloudinary.com/{quote.character.name}.jpg' />
                </div>
            })}
        </div>
    );   
};

export default Quotes;